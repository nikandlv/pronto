<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>{{\Config('app.name')}}</title>
</head>

<body>
  <div id="root"></div>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <script>
  let __status = {{isset($status)? $status : 200}};
  let __exception = {!!isset($exception)? json_encode($exception) : '""'!!};
  </script>
  <script src="{{ mix('jsx/application.js') }}"></script>
</body>

</html>