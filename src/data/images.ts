const imgNames = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  'nina',
  'ivan',
  'taja',
  'sasha',
  'vlad',
  'zhenya',
  'tonya',
  'platon',
  'valya',
]

export const imgArray = imgNames.map((imgName) => ({
  src: require(`/public/game/${imgName}.png`).default,
  name: imgName,
}))
