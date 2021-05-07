import { PropType } from 'vue';
import { isMobile } from '../utils';
export declare type ContactEditInfo = {
    tel: string;
    name: string;
    isDefault?: boolean;
};
declare const _default: import("vue").DefineComponent<{
    isEdit: BooleanConstructor;
    isSaving: BooleanConstructor;
    isDeleting: BooleanConstructor;
    showSetDefault: BooleanConstructor;
    setDefaultLabel: StringConstructor;
    contactInfo: {
        type: PropType<ContactEditInfo>;
        default: () => ContactEditInfo;
    };
    telValidator: {
        type: PropType<(val: string) => boolean>;
        default: typeof isMobile;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("save" | "delete" | "change-default")[], "save" | "delete" | "change-default", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
    isSaving: boolean;
    isDeleting: boolean;
    showSetDefault: boolean;
    telValidator: (val: string) => boolean;
    isEdit: boolean;
    contactInfo: ContactEditInfo;
} & {
    setDefaultLabel?: string | undefined;
}>, {
    isSaving: boolean;
    isDeleting: boolean;
    showSetDefault: boolean;
    telValidator: (val: string) => boolean;
    isEdit: boolean;
    contactInfo: ContactEditInfo;
}>;
export default _default;
