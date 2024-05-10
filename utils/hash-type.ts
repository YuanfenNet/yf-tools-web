import HashType from '@/enums/hash-type'

export async function getHashFunction(hashType: HashType): Promise<any> {
  switch (hashType) {
    case HashType.md5:
      return (await import('crypto-js/md5.js')).default

    case HashType.sha1:
      return (await import('crypto-js/sha1.js')).default

    case HashType.sha256:
      return (await import('crypto-js/sha256.js')).default

    case HashType.sha224:
      return (await import('crypto-js/sha224.js')).default

    case HashType.sha512:
      return (await import('crypto-js/sha512.js')).default

    case HashType.sha384:
      return (await import('crypto-js/sha384.js')).default

    case HashType.sha3:
      return (await import('crypto-js/sha3.js')).default

    case HashType.ripemd160:
      return (await import('crypto-js/ripemd160.js')).default

    case HashType['hmac-md5']:
      return (await import('crypto-js/hmac-md5.js')).default

    case HashType['hmac-sha256']:
      return (await import('crypto-js/hmac-sha256.js')).default

    case HashType['hmac-sha224']:
      return (await import('crypto-js/hmac-sha224.js')).default

    case HashType['hmac-sha512']:
      return (await import('crypto-js/hmac-sha512.js')).default

    case HashType['hmac-sha384']:
      return (await import('crypto-js/hmac-sha384.js')).default

    case HashType['hmac-sha3']:
      return (await import('crypto-js/hmac-sha3.js')).default

    case HashType['hmac-ripemd160']:
      return (await import('crypto-js/hmac-ripemd160.js')).default

    default:
      throw new Error(`Unsupported hash type: ${hashType}`)
  }
}
