function getEncryptedString(s: string, k: number): string {
    k = k % s.length;

    let newEncryption = '';

    for (let i = 0; i < s.length; i++) {

        let newIndex = (i + k) % s.length;

        newEncryption += s[newIndex]

    }

    return newEncryption
};