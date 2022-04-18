import { Injectable } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export interface InputFieldData {
    label: string,
    type: string,
    placeholder: string,
    name: string,
    errorMsg: string,
    formField: AbstractControl | null,
    tag: 'input' | 'textarea'
}

@Injectable({
    providedIn: "root",
})
export class FormService {
    
    constructor(private formBuilder: FormBuilder) {}

    /*   ******************* Модалка "Тех.поддержка" ***********************   */

    techSupportForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
    });

    techSupportFormGroupData: InputFieldData[] = [
        {
            label: "Логин",
            type: "email",
            placeholder: "Ваш e-mail",
            name: "email",
            errorMsg: "Заполните поле!",
            formField: this.techSupportForm.get("email"),
            tag: 'input'
        },
        {
            label: "Пароль",
            type: "password",
            placeholder: "Введите пароль",
            name: "password",
            errorMsg: "Заполните поле!",
            formField: this.techSupportForm.get("password"),
            tag: 'input'
        }
    ];

    techSupportFormSubmit() {
        console.log(`
            Форма тех.поддержки
            email val: ${this.techSupportForm.get("email")?.value}
            password val: ${this.techSupportForm.get("password")?.value}
        `);
    }

    /*   ********************* Модалка "Восстановления пароля" *********************   */

    passwordRestoreForm: FormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
    });

    passwordRestoreFormGroupData: InputFieldData[] = [
        {
            label: "e-mail",
            type: "email",
            placeholder: "Ваша почта для связи",
            name: "email",
            errorMsg: "Заполните поле!",
            formField: this.passwordRestoreForm.get("email"),
            tag: 'input'
        },
        {
            label: "Телефон",
            type: "text",
            placeholder: "+7",
            name: "phone",
            errorMsg: "Заполните поле!",
            formField: this.passwordRestoreForm.get("phone"),
            tag: 'input'
        }
    ];

    passwordRestoreFormSubmit() {
        console.log(`
            Форма восстановления пароля
            email val: ${this.passwordRestoreForm.get("email")?.value}
            phone val: ${this.passwordRestoreForm.get("phone")?.value}
        `);
    }

    /*   ********************* Модалка "Написать сообщение" *********************   */

    writeMessageForm: FormGroup = this.formBuilder.group({
        name: ['', [Validators.required]],
        company: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        question: ['', [Validators.required]]
    });

    writeMessageFormGroupData: InputFieldData[] = [
        {
            label: "Имя",
            type: "text",
            placeholder: "Как к вам обращаться",
            name: "name",
            errorMsg: "Заполните поле!",
            formField: this.writeMessageForm.get("name"),
            tag: 'input'
        },
        {
            label: "Компания",
            type: "text",
            placeholder: "Ваша компания",
            name: "company",
            errorMsg: "Заполните поле!",
            formField: this.writeMessageForm.get("company"),
            tag: 'input'
        },
        {
            label: "e-mail",
            type: "email",
            placeholder: "Ваша почта для связи",
            name: "email",
            errorMsg: "Заполните поле!",
            formField: this.writeMessageForm.get("email"),
            tag: 'input'
        },
        {
            label: "Телефон",
            type: "text",
            placeholder: "+7",
            name: "phone",
            errorMsg: "Заполните поле!",
            formField: this.writeMessageForm.get("phone"),
            tag: 'input'
        },
        {
            label: "Вопрос",
            type: "text",
            placeholder: "Задайте свой вопрос",
            name: "question",
            errorMsg: "Заполните поле!",
            formField: this.writeMessageForm.get("question"),
            tag: 'textarea'
        },
    ];

    writeMessageFormSubmit() {
        console.log(`
            Форма 'Написать сообщение':
            name val: ${this.writeMessageForm.get("name")?.value}
            company val: ${this.writeMessageForm.get("company")?.value}
            email val: ${this.writeMessageForm.get("email")?.value}
            phone val: ${this.writeMessageForm.get("phone")?.value}
            question val: ${this.writeMessageForm.get("question")?.value}
        `);
    }
}