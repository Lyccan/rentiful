"use client"

import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator, Heading, Radio, RadioGroupField, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { usePathname, useRouter } from 'next/navigation';
import { I18n } from 'aws-amplify/utils';

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
            userPoolClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
        }
    }
});


// LANGUAGE CONFIGURATION

const dict = {
    pt: {
        'Sign in': 'Entrar',
        'Create Account': 'Cadastrar',
        'Forgot your password?': 'Esqueceu sua senha?',
    }
}
I18n.putVocabularies(dict);

I18n.setLanguage('pt');

// COMPONENTS CONFIGURATION
const components = {
    Header() {
        return (
            <View >
                <Heading level={3} className="!text-2xl font-bold">
                    RENT
                    <span className="text-secondary-500 font-light hover:!text-primary-300">
                        FUL
                    </span>
                </Heading>
                <p className="text-muted-foreground mt-2">
                    <span className="font-bold">
                        Bem Vindo! Faça login ou crie uma conta para continuar.
                    </span>
                </p>
            </View>
        )
    },
    SignIn: {
        Footer() {
            const { toSignUp } = useAuthenticator();
            return (
                <View className="text-center mt-4">
                    <p className="text-muted-foreground">
                        Não tem uma conta?{" "}
                        <button
                            className="text-primary-900 cursor-pointer underline bg-transparent border-none p-0"
                            onClick={toSignUp}
                        >
                            Inscreva-se
                        </button>
                    </p>
                </View>
            )
        }
    },
    SignUp: {
        FormFields() {
            const { validationErrors } = useAuthenticator();
            return (
                <>
                    <Authenticator.SignUp.FormFields />
                    <RadioGroupField
                        legend="Cargo"
                        name="custom:role"
                        errorMessage={validationErrors?.['custom:role']}
                        hasError={!!validationErrors?.["custom:role"]}
                        isRequired
                    >
                        <Radio value="tenant">Residente</Radio>
                        <Radio value="manager">Locador</Radio>
                    </RadioGroupField>
                </>
            )
        },
        Footer() {
            const { toSignIn } = useAuthenticator();
            return (
                <View className="text-center mt-4">
                    <p className="text-muted-foreground">
                        Já tem uma conta?{" "}
                        <button
                            className="text-primary-900 cursor-pointer underline bg-transparent border-none p-0"
                            onClick={toSignIn}
                        >
                            Faça login
                        </button>
                    </p>
                </View>
            )
        }
    }
}
// FORM FIELDS CONFIGURATION

const formFields = {
    signIn: {
        username: {
            placeholder: "Insira seu email",
            label: "Email",
            isRequired: true,
        },
        password: {
            placeholder: "Insira sua senha",
            label: "Senha",
            isRequired: true,
        },
    },
    signUp: {
        username: {
            order: 1,
            placeholder: "Nome do usuário",
            label: "Nome de usuário",
            isRequired: true,
        },
        email: {
            order: 2,
            placeholder: "Insira seu email",
            label: "Email",
            isRequired: true
        },
        password: {
            order: 3,
            placeholder: "Crie uma senha",
            label: "Senha",
            isRequired: true
        },
        confirm_password: {
            order: 4,
            placeholder: "Confirme sua senha",
            label: "Confirme sua senha",
            isRequired: true
        }
    }
}


const Auth = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthenticator((context) => [context.user]);

    const pathname = usePathname();
    const isAuthPage = pathname.match(/^\/(signin|sinup)$/);

    if (!isAuthPage) {
        return <>{children}</>
    }

    return (
        <div className="h-full">
            <Authenticator
                initialState={pathname.includes('signin') ? 'signIn' : 'signUp'}
                components={components}
                formFields={formFields}
            >
                {() => <>{children}</>}
            </Authenticator>
        </div>
    );
}

export default Auth;
