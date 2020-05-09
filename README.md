# DeVito Converter

Measure length in Danny DeVitos!

## Use in Browser

Download the `devito.js` file from `dist` folder and include it in your HTML file.

### External file

#### index.html

```html

<h1>Hello World! Danny DeVito is <span id="devitoHeight"></span> meters tall!</h1>

<script src="/path/to/devito.js"></script>
<script>
  var converter = new DannyDeVito();
  var span = document.getElementById(`devitoHeight`);

  span.innerHtml = converter.toMeters(1, 0);
</script>

```

### Inline `script` tag

#### index.html

```html

<h1>Hello World!
Danny DeVito is <span id="devitoHeight"></span> meters tall!</h1>

<script src="/path/to/devito.js"></script>
<script src="/path/to/your/script.js"></script>

```

#### script.js

```javascript

var converter = new DannyDeVito();
var span = document.getElementById(`devitoHeight`);

span.innerHtml = converter.toMeters(1, 0);

```
