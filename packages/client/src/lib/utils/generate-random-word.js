export default function generateRandomWord (min, max) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'qu', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'tt', 'ch', 'sh']
  const length = _getLength(min, max)
  let isVowel = false
  let word = ''
  let characterSet
  for (let i = 0; i < length; i++) {
    characterSet = isVowel ? vowels : consonants
    isVowel = !isVowel
    word += characterSet[Math.round(Math.random() * (characterSet.length - 1))]
  }
  return word
}

function _getLength (min, max) {
  const integer = Math.floor(Math.random() * (max - 1))
  if (integer < min) {
    return _getLength(min, max)
  } else {
    return integer
  }
}
