export class RegisterGenerator {
    professorMatriculaGenerator() {
        const createdAt: Date = new Date();
        const createdInYear: string = createdAt.getFullYear().toString().substring(2, 4);

        let semester: string;
        createdAt.getMonth() < 6 ? semester = "00" : semester = "01";

        const randomNumber = Math.floor(Math.random() * 999 + 1);
        const matricula: string = createdInYear + semester + randomNumber;

        return matricula;
    }
}