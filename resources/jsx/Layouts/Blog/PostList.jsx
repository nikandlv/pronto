import React from 'react'
import { IconButton, makeStyles, Divider, Grid, CircularProgress, Chip, LinearProgress } from '@material-ui/core'

import Amber from '@material-ui/core/colors/amber'
import Blue from '@material-ui/core/colors/blue'
import Red from '@material-ui/core/colors/red'
import ViewDay from '@material-ui/icons/ViewDayOutlined'
import DeleteIcon from '@material-ui/icons/ClearOutlined'
import GridIcon from '@material-ui/icons/DashboardOutlined'
import LabelIcon from '@material-ui/icons/LabelOutlined'
import CategoryIcon from '@material-ui/icons/CategoryOutlined'
import Explore from '@material-ui/icons/ExploreOutlined'
import PostPreview from '../../Components/PostPreview'
import withDynamic from '../../Data/withDynamic'
import { setTag, setSearch } from '../../Data/Actions/ApplicationActions'
import StyledButton from '../../Components/StyledButton'
import { withStyles } from '@material-ui/styles'
import StyledTitle from '../../Components/StyledTitle'

const styles = (theme => (
    {
        header: {
            display: 'flex',
            alignItems: 'center'
        },
        push: {
            flexGrow: 1
        },
        container: {
            marginTop: 16
        },
        chip: {
            margin: 3,
            color: '#616161',
            '& svg': {
                color: '#616161',
            },
            '&.explore': {
                backgroundColor: Amber[100],
                '&:hover,&:active,&:focus': {
                    backgroundColor: Amber[300],
                }
            },
            '&.category': {
                backgroundColor: Blue[100],
                '&:hover,&:active,&:focus': {
                    backgroundColor: Blue[300],
                }
            },
            '&.tag': {
                backgroundColor: Red[100],
                '&:hover,&:active,&:focus': {
                    backgroundColor: Red[300],
                }
            }
        },
        loadMoreWrapper: {
            marginTop: 16,
            display: 'flex',
            justifyContent: 'center'
        }
    }
))

const modes = {
    GRID: 'GRID',
    LIST: 'LIST'
}

class PostList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mode: 0,
            posts: [],
            loading: true,
        }
    }
    
    componentDidMount() {
        this.update()
    }

    setMode = (mode) => {
        this.setState({mode})
    }
    setLoading = (loading) => {
        this.setState({loading})
    }

    update() {
        this.setLoading(true)
        window.setTimeout(() => {
            this.setState({
                posts: [...this.state.posts, {
                    title: 'Whats the best way to learn',
                    date: 'Oct 20, 2019',
                    description: 'In this post we are going to learn how to learn!',
                    image: '/img/post-2.jpg'
                }, 
                {
                    title: 'Hello world!',
                    date: 'Oct 21, 2019',
                    description: 'Hello world! in this post im gonna talk about my self and everything i went through',
                    image: '/img/post-1.jpg'
                }
            ]
            })
            this.setLoading(false)
        },1000)
    }
    
    render() {
        const styles = this.props.classes
        const {loading,mode,posts} = this.state
        const reducer = this.props.ApplicationReducer || {}
        
        
        return (
            <section>
                
                <div className={styles.header}>
                    <StyledTitle >
                        Home
                    </StyledTitle>    
                    <div className={styles.push} />
                    {
                        reducer.search === ""
                        ? (
                            <IconButton>
                                <Explore />
                            </IconButton>
                        )
                        : <Chip color="inherit" className={`${styles.chip} explore`} icon={<Explore />} label={reducer.search} deleteIcon={<DeleteIcon />} onDelete={() => {
                            this.props.setSearch('')   
                        }}/>
                    }
                    {
                        reducer.category.id === 0
                        ? (
                            <IconButton>
                                <CategoryIcon />
                            </IconButton>
                        )
                        : <Chip className={`${styles.chip} category`} icon={<CategoryIcon />} label={reducer.category.title} deleteIcon={<DeleteIcon />} onDelete={() => {
    
                        }}/>
                    }
                    {
                        reducer.tag === ""
                        ? (
                            <IconButton>
                                <LabelIcon />
                            </IconButton>
                        )
                        : <Chip className={`${styles.chip} tag`} icon={<LabelIcon />} label={reducer.tag} deleteIcon={<DeleteIcon />} onDelete={() => {
                            this.props.setTag('')
                        }}/>
                    }                
                    
                    <IconButton onClick={event => {
                        setMode(
                            mode === modes.LIST
                            ? modes.GRID
                            : modes.LIST
                        )
                    }}>
                        {
                            mode === modes.LIST
                            ? <ViewDay />
                            : <GridIcon />
                        }
                    </IconButton>
                </div>
                <Grid container className={styles.container} spacing={2}>
                    {
                        posts.length === 0 && loading 
                        ? <Grid item xs={12}>
                            <LinearProgress variant="indeterminate" />
                        </Grid>

                        :
                            posts.map((post,key) => {
                                if(mode === modes.LIST) {
                                    return (
                                        <Grid item xs={12} key={key}>
                                            <PostPreview {...post}/>
                                        </Grid>
                                    )    
                                }
                                return (
                                    <Grid item xs={12} md={6} key={key}>
                                        <PostPreview {...post}/>
                                    </Grid>
                                )
                            })
                        
                    }
                    <Grid item xs={12} className={styles.loadMoreWrapper}>
                    <StyledButton disabled={loading} onClick={() => {
                                this.update()   
                            }}>
                        {
                            loading
                            ? <CircularProgress className={styles.progressBar} color="inherit" />
                            : 'Load More'
                        }        
                            </StyledButton>
                    </Grid>
                </Grid>
            </section>
        )
    }
}


export default withDynamic(
    withStyles(styles)(PostList)
)
.injectReducer('ApplicationReducer')
.injectAction('setSearch',setSearch)
.injectAction('setTag',setTag).build()