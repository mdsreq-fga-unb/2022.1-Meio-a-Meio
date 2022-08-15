export class RegisterGenerator {

    professorMatriculaGenerator(amount: number) {
        const createdAt: Date = new Date();
        const createdInYear: string = createdAt.getFullYear().toString().substring(2, 4);

        let semester: string;
        createdAt.getMonth() < 6 ? semester = "00" : semester = "01";

        const serial: string = this.serialNumber(amount, 3)
        const matricula: string = createdInYear + semester + serial;

        return matricula;
    }

    serialNumber(amount: number, amountDigits: number){
        amountDigits -= amount.toString().length;
        return '0'.repeat(amountDigits) + amount;
    }
}