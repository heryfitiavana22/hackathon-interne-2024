import * as bcrypt from "bcrypt";

const SALT_ROUND = 8;
export class Hash {
    static make(value: string) {
        return bcrypt.hashSync(value, SALT_ROUND);
    }

    static compare(value: string, hashValue: string) {
        return bcrypt.compareSync(value, hashValue);
    }
}
