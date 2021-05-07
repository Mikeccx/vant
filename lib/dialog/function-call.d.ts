import { App, CSSProperties, TeleportProps } from 'vue';
import { Interceptor } from '../utils/interceptor';
import { DialogTheme, DialogAction, DialogMessage, DialogMessageAlign } from './Dialog';
export declare type DialogOptions = {
    title?: string;
    width?: string | number;
    theme?: DialogTheme;
    message?: DialogMessage;
    overlay?: boolean;
    teleport?: TeleportProps['to'];
    className?: unknown;
    allowHtml?: boolean;
    lockScroll?: boolean;
    transition?: string;
    beforeClose?: Interceptor;
    messageAlign?: DialogMessageAlign;
    overlayClass?: string;
    overlayStyle?: CSSProperties;
    closeOnPopstate?: boolean;
    cancelButtonText?: string;
    showCancelButton?: boolean;
    showConfirmButton?: boolean;
    cancelButtonColor?: string;
    confirmButtonText?: string;
    confirmButtonColor?: string;
    closeOnClickOverlay?: boolean;
};
declare function Dialog(options: DialogOptions): Promise<unknown>;
declare namespace Dialog {
    var defaultOptions: {
        title: string;
        width: string;
        theme: null;
        message: string;
        overlay: boolean;
        callback: null;
        teleport: string;
        className: string;
        allowHtml: boolean;
        lockScroll: boolean;
        transition: string;
        beforeClose: null;
        overlayClass: string;
        overlayStyle: undefined;
        messageAlign: string;
        cancelButtonText: string;
        cancelButtonColor: null;
        confirmButtonText: string;
        confirmButtonColor: null;
        showConfirmButton: boolean;
        showCancelButton: boolean;
        closeOnPopstate: boolean;
        closeOnClickOverlay: boolean;
    };
    var currentOptions: {
        title: string;
        width: string;
        theme: null;
        message: string;
        overlay: boolean;
        callback: null;
        teleport: string;
        className: string;
        allowHtml: boolean;
        lockScroll: boolean;
        transition: string;
        beforeClose: null;
        overlayClass: string;
        overlayStyle: undefined;
        messageAlign: string;
        cancelButtonText: string;
        cancelButtonColor: null;
        confirmButtonText: string;
        confirmButtonColor: null;
        showConfirmButton: boolean;
        showCancelButton: boolean;
        closeOnPopstate: boolean;
        closeOnClickOverlay: boolean;
    };
    var alert: typeof Dialog;
    var confirm: (options: DialogOptions) => Promise<unknown>;
    var close: () => void;
    var setDefaultOptions: (options: DialogOptions) => void;
    var resetDefaultOptions: () => void;
    var install: (app: App<any>) => void;
    var Component: import("../utils").WithInstall<import("vue").DefineComponent<{
        show: BooleanConstructor;
        zIndex: (NumberConstructor | StringConstructor)[];
        overlay: {
            type: BooleanConstructor;
            default: true;
        };
        duration: (NumberConstructor | StringConstructor)[];
        teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
        lockScroll: {
            type: BooleanConstructor;
            default: true;
        };
        lazyRender: {
            type: BooleanConstructor;
            default: true;
        };
        overlayStyle: import("vue").PropType<CSSProperties>;
        overlayClass: import("vue").PropType<unknown>;
        transitionAppear: BooleanConstructor;
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: true;
        };
    } & {
        title: StringConstructor;
        theme: import("vue").PropType<DialogTheme>;
        width: (NumberConstructor | StringConstructor)[];
        message: import("vue").PropType<DialogMessage>;
        callback: import("vue").PropType<(action?: DialogAction | undefined) => void>;
        allowHtml: BooleanConstructor;
        className: import("vue").PropType<unknown>;
        beforeClose: import("vue").PropType<Interceptor>;
        messageAlign: import("vue").PropType<DialogMessageAlign>;
        closeOnPopstate: {
            type: BooleanConstructor;
            default: true;
        };
        showCancelButton: BooleanConstructor;
        cancelButtonText: StringConstructor;
        cancelButtonColor: StringConstructor;
        confirmButtonText: StringConstructor;
        confirmButtonColor: StringConstructor;
        showConfirmButton: {
            type: BooleanConstructor;
            default: true;
        };
        closeOnClickOverlay: BooleanConstructor;
        transition: {
            type: StringConstructor;
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "update:show" | "confirm")[], "cancel" | "update:show" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps, Readonly<{
        overlay: boolean;
        show: boolean;
        lockScroll: boolean;
        lazyRender: boolean;
        transitionAppear: boolean;
        closeOnClickOverlay: boolean;
        transition: string;
        closeOnPopstate: boolean;
        allowHtml: boolean;
        showCancelButton: boolean;
        showConfirmButton: boolean;
    } & {
        title?: string | undefined;
        zIndex?: string | number | undefined;
        duration?: string | number | undefined;
        teleport?: string | import("vue").RendererElement | null | undefined;
        overlayStyle?: CSSProperties | undefined;
        overlayClass?: unknown;
        className?: unknown;
        callback?: ((action?: DialogAction | undefined) => void) | undefined;
        cancelButtonText?: string | undefined;
        confirmButtonText?: string | undefined;
        message?: DialogMessage | undefined;
        theme?: DialogTheme | undefined;
        width?: string | number | undefined;
        beforeClose?: Interceptor | undefined;
        messageAlign?: DialogMessageAlign | undefined;
        cancelButtonColor?: string | undefined;
        confirmButtonColor?: string | undefined;
    }>, {
        overlay: boolean;
        show: boolean;
        lockScroll: boolean;
        lazyRender: boolean;
        transitionAppear: boolean;
        closeOnClickOverlay: boolean;
        transition: string;
        closeOnPopstate: boolean;
        allowHtml: boolean;
        showCancelButton: boolean;
        showConfirmButton: boolean;
    }>>;
}
export { Dialog };
