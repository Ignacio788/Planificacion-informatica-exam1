

let student = {
    dni:"484481",
    surname:"videla sanchez",
    name:"Ignacio",
    birthday:"27/10/2001",

    getDNI() {
        return this.dni;
    },
     setDNI(dni) {
         this.dni = dni
     },

    getSurname() {
        return this.surname;
    },
    setSurname(surname) {
        this.surname = surname
    },

    getName() {
        return this.name;
    },
    setName(name) {
        this.name = name
    },

    getBirthday() {
        return this.birthday;
    },
    setBirthday(birthday) {
        this.birthday = birthday
    }
}

let contents = {
    idMat:"1",
    descMateria:"Laboratorio de Programacion",

    getIdMat() {
        return this.idMat;
    },

    getDescMateria() {
        return this.descMateria;
    },
    setDescMateria(descMateria) {
        this.descMateria = descMateria;
    },

    getStudent() {
        return getName()+' '+getSurname()+' '+getDNI();
    }
}

let exam = {
    IdEx:"1",
    FechExam:"27/10/23", 
    Nota:"10",// este lo agregue yo

    getIdEx() {
        return this.idEx;
    },

    getFechExam() {
        return this.fechExam;
    },
    setFechExam(fechExam) {
        this.fechExam = fechExam;
    },
    getNota() {
        return this.nota;
    },
    setNota(nota) {
         this.nota= nota;
    },

}

let enviar = () => {
    let name = document.getElementById("Nbr").value;
    let surname = document.getElementById("Apel").value;
    let dni = document.getElementById("Dni").value;
    let birthday = document.getElementById("Fnac").value;

    //getIntoStudent(name, surname, dni, birthday)
    student.setName(name);
    student.setSurname(surname);
    student.setBirthday(birthday);
    student.getDNI(dni);
    alert("El estudiante se llama "+ student.getName()+ " "+student.getSurname()+". Su fecha de cumpleaños es el "+student.getBirthday()+", y su DNI es "+ student.getDNI());

}

let getIntoStudent = (name, surname, dni, birthday) => {
   
}


    let show = () => {
        let descMateria = document.getElementById("Materia").value;
        let fechExam = document.getElementById("FExam").value;
        let Nota = document.getElementById("Nota").value;

        contents.setDescMateria(descMateria);
        exam.setFechExam(fechExam);
        exam.setNota(Nota);
      
        alert("La evaluacion de "+ contents.getDescMateria()+ " fue el dia "+" "+ exam.getFechExam()+". Su nota fue de "+exam.getNota()+" ");

}
