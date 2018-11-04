import * as FXP from 'fast-xml-parser';

export function getTemplate(x: string) {
  // TODO: update a normal xml parser
  const result = {
    script: '',
    scriptLang: '',
    style: '',
    styleLang: '',
    template: '',
  };
  const templateStart = x.indexOf('<template>') + '<template>'.length;
  const templateEnd = x.lastIndexOf('</template>');
  result.template = x.substring(templateStart, templateEnd);
  const scriptStart = x.indexOf('<script');
  const scriptEnd = x.lastIndexOf('</script>') + '</script>'.length;
  result.script = x.substring(scriptStart, scriptEnd);
  const scriptResult = FXP.parse(result.script, {
    attrNodeName: 'attr',
    attributeNamePrefix: '',
    ignoreAttributes: false,
  });
  result.scriptLang =
    scriptResult && scriptResult.script && scriptResult.script.attr && scriptResult.script.attr.lang;
  const styleStart = x.indexOf('<style');
  const styleEnd = x.lastIndexOf('</style>') + '</style>'.length;
  result.style = x.substring(styleStart, styleEnd);
  const styleResult = FXP.parse(result.style, {
    attrNodeName: 'attr',
    attributeNamePrefix: '',
    ignoreAttributes: false,
  });
  result.styleLang =
    styleResult && styleResult.style && styleResult.style.attr && styleResult.style.attr.lang;
  return result;
}
