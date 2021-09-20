interface I {
  [key: string]: { require: string, name: string }
}


const SkillImg: I = {
  html5: { require: require('./html5.svg').default, name: 'HTML5' },
  css3: { require: require('./css3.svg').default, name: 'CSS3' },
  php: { require: require('./php.svg').default, name: 'php' },
  rails: { require: require('./rails.svg').default, name: 'Ruby on Rails' },
  cpp: { require: require('./cpp.svg').default, name: 'C++' },
  gas: { require: require('./gas.svg').default, name: 'Google Apps Script' },
  react: { require: require('./react.svg').default, name: 'React' },
  sass: { require: require('./sass.svg').default, name: 'Sass' },
  figma: { require: require('./figma.svg').default, name: 'Figma' },
  vscode: { require: require('./vscode.svg').default, name: 'Visual Studio Code' }
}

export default SkillImg;