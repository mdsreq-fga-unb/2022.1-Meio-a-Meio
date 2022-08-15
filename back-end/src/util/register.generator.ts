export class RegisterGenerator {

    matriculaGenerator(amount: number, amountDigits: number) {
        const createdAt: Date = new Date();
        const createdInYear: string = createdAt.getFullYear().toString().substring(2, 4);

        let semester: string;
        createdAt.getMonth() < 6 ? semester = "00" : semester = "01";

        amountDigits -= amount.toString().length;
        const serialNumber: string = '0'.repeat(amountDigits) + amount;

        const matricula: string = createdInYear + semester + serialNumber;
        return matricula;
    }
}