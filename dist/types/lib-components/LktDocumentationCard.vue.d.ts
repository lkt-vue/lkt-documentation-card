declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    intro?: string | undefined;
    icon?: string | undefined;
    readMoreLink?: string | undefined;
    npmLink?: string | undefined;
    packagistLink?: string | undefined;
    githubLink?: string | undefined;
    gitlabLink?: string | undefined;
    bitbucketLink?: string | undefined;
}>, {
    title: string;
    intro: string;
    icon: string;
    readMoreLink: string;
    npmLink: string;
    packagistLink: string;
    githubLink: string;
    gitlabLink: string;
    bitbucketLink: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    intro?: string | undefined;
    icon?: string | undefined;
    readMoreLink?: string | undefined;
    npmLink?: string | undefined;
    packagistLink?: string | undefined;
    githubLink?: string | undefined;
    gitlabLink?: string | undefined;
    bitbucketLink?: string | undefined;
}>, {
    title: string;
    intro: string;
    icon: string;
    readMoreLink: string;
    npmLink: string;
    packagistLink: string;
    githubLink: string;
    gitlabLink: string;
    bitbucketLink: string;
}>>>, {
    title: string;
    icon: string;
    intro: string;
    readMoreLink: string;
    npmLink: string;
    packagistLink: string;
    githubLink: string;
    gitlabLink: string;
    bitbucketLink: string;
}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
