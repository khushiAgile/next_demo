export interface IRenderInputProps {
    register: any;
    type?: string | 'text';
    containerClasses?: string;
    inputClasses?: string;
    formField?: string;
    disabled?: boolean;
    children?: any;
    errorClasses?: string;
    labelClasses?: string;
    placeholder?: string;
    labelName: string;
    containerClass?: string | '';
    inputClass?: string | '';
    errorClass?: string | '';
    errorMessage?: any;
    formState?: {
        errors: any;
        touchedFields: any;
    }
}