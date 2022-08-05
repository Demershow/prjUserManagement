class UserController {

    constructor(formId) {

        this.formEl = docmuent.getElementbyId(formId);

    }

    onSubmit(){

        this.formEl.addEventListener('submit', (event) => {

            event.preventDefault();

            this.getValues();
        
        })

    }

    getValues() {

        let user = {};

        this.formEl.elements.forEach(function (field, index) {

            if (field.name == "gender") {

                if (field.checked) {
                    user[field.name] = field.value;

                }
            } else {

                user[field.name] = field.value;

            }

        });


        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.passowrd,
            user.photo,
            user.admin);


    }
    

}

