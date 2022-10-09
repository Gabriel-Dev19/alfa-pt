const textEstados = (distrito) => {
  return(
    `Algum texto qualquer do distrito de ${distrito}`
  )
}

const textCidades = (cidade) => {
  return(
    `Algum texto qualquer do cidade de ${cidade}`
  )
}

export const distritos = [
  {
    distrito: 'detective-privado-em-Aveiro',
    name: 'Aveiro',
    text: textEstados('Aveiro'),
    cidades: [
      {
        cidade: 'detective-privado-em-Agueda',
        name: 'Águeda',
        text: textCidades('Águeda')
      },
      {
        cidade: 'detective-privado-em-Outra-Coisa',
        name: 'Outra coisa',
        text: textCidades('Outra coisa')
      },
      {
        cidade: 'detective-privado-em-Alguma-Coisa',
        name: 'Alguma Coisa',
        text: textCidades('Alguma Coisa')
      },
    ]
  },
  {
    distrito: 'detective-privado-em-Braga',
    name: 'Braga',
    text: textEstados('Braga'),
    cidades: [
      {
        cidade: 'detective-privado-em-Agueda',
        name: 'Águeda',
        text: textCidades('Águeda')
      },
      {
        cidade: 'detective-privado-em-Outra-Coisa',
        name: 'Outra coisa',
        text: textCidades('Outra coisa')
      },
      {
        cidade: 'detective-privado-em-Alguma-Coisa',
        name: 'Alguma Coisa',
        text: textCidades('Alguma Coisa')
      },
    ]
  },
  {
    distrito: 'detective-privado-em-Porto',
    name: 'Porto',
    text: textEstados('Porto'),
    cidades: [
      {
        cidade: 'detective-privado-em-Agueda',
        name: 'Águeda',
        text: textCidades('Águeda')
      },
      {
        cidade: 'detective-privado-em-Outra-Coisa',
        name: 'Outra coisa',
        text: textCidades('Outra coisa')
      },
      {
        cidade: 'detective-privado-em-Alguma-Coisa',
        name: 'Alguma Coisa',
        text: textCidades('Alguma Coisa')
      },
    ]
  }
]