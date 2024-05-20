export const StringUtils = {
  convertToCurrency: (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
}
