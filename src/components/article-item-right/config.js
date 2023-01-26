export const gracefulText = [
  '坠兔收光',
  '漱石枕流',
  '屡变星霜',
  '枕山襟海',
  '沤珠槿艳',
  '夭桃秾李',
  '千岁鹤归',
  '珠翠之珍',
  '杳霭流玉',
  '月落星沉',
  '芒寒色正',
  '浮翠流丹',
  '自月至鱼',
  '岁聿云暮',
  '片石韩陵',
  '星奔川骛',
  '鹤归华表',
  '绮纨之岁',
  '月露风云',
  '珠零锦粲',
  '秦欢晋爱',
  '袂云汗雨',
  '霞姿月韵'
]

export function randomGraceful() {
  let index = Math.floor(Math.random() * gracefulText.length - 1)
  return gracefulText[index]
}