const yaml = require('js-yaml');

export async function yamlParser(path){
    let parseResult = await fetch(path)
    .then(r => r.text())
    .then(text => {
      return yaml.load(text)
    });
    // console.log(parseResult)
    return parseResult
}
