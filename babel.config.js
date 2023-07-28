export default{
  "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  "plugins": [],
  "ignore": ["**/*.test.js", "**/*.spec.js"], // Ignore test files
  "overrides": [
    {
      "test": ["./src/App.js", "./src/main.js", "./src/components-waitress/components-menu/Menu.js", /* Add other problematic files here */],
      "presets": [["@babel/preset-env", { "modules": "commonjs" }]]
    }
  ]
}
