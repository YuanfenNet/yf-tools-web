enum HashType {
    md5 = 'md5',
    sha1 = 'sha1',
    sha256 = 'sha256',
    sha224 = 'sha224',
    sha512 = 'sha512',
    sha384 = 'sha384',
    sha3 = 'sha3',
    ripemd160 = 'ripemd160',
    'hmac-md5' = 'hmac-md5',
    'hmac-sha256' = 'hmac-sha256',
    'hmac-sha224' = 'hmac-sha224',
    'hmac-sha512' = 'hmac-sha512',
    'hmac-sha384' = 'hmac-sha384',
    'hmac-sha3' = 'hmac-sha3',
    'hmac-ripemd160' = 'hmac-ripemd160',
}

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

export default HashType
