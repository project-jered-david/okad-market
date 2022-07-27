const { render, screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import SignIn from "./index.jsx";
import "@testing-library/jest-dom";

test("courriel input devraient s'afficher", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const userInputElement = screen.getByPlaceholderText(
        /Entrez votre courriel.../i
    );
    expect(userInputElement).toBeInTheDocument();
});

test("password input devraient s'afficher", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const passwordInputElement = screen.getByPlaceholderText(
        /Entrez votre mot de passe.../i
    );
    expect(passwordInputElement).toBeInTheDocument();
});

test("bouton de connexion devraient s'afficher", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const signInButton = screen.getByTestId("sign-in-button");
    expect(signInButton).toBeInTheDocument();
});

test("bouton de connexion devraient être désactivé", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const signInButton = screen.getByRole("button");
    expect(signInButton).toBeDisabled();
});

test("courriel input devraient vide", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const userInputElement = screen.getByPlaceholderText(
        /Entrez votre courriel.../i
    );
    expect(userInputElement.value).toBe("");
});

test("password input devraient être vide", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const passwordInputElement = screen.getByPlaceholderText(
        /Entrez votre mot de passe.../i
    );
    expect(passwordInputElement.value).toBe("");
});

test("texte de connexion devraient s'afficher", () => {
    const { getByText } = render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    expect(getByText("connexion")).toBeInTheDocument();
});

test("message d'erreur connexion ne devraient pas être visible", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const errorEl = screen.getByTestId("error-sign-in");
    expect(errorEl).not.toBeVisible();
});

test("courriel input devraient changer", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const usernameInputElement = screen.getByPlaceholderText(
        /Entrez votre courriel.../i
    );
    const testValue = "a@test.com";
    fireEvent.change(usernameInputElement, { target: { value: testValue } });

    expect(usernameInputElement.value).toBe(testValue);
});

test("password input devraient changer", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const testValue = "password";
    const passwordInputElement = screen.getByPlaceholderText(
        /Entrez votre mot de passe.../i
    );
    fireEvent.change(passwordInputElement, { target: { value: testValue } });
    expect(passwordInputElement.value).toBe(testValue);
});

test("bouton de connexion ne devraient pas être désactivé si les champs sont remplis", () => {
    render(
        <BrowserRouter>
            <SignIn />
        </BrowserRouter>
    );
    const signInButton = screen.getByRole("button");
    const testValue = "password";
    const passwordInputElement = screen.getByPlaceholderText(
        /Entrez votre mot de passe.../i
    );
    const usernameInputElement = screen.getByPlaceholderText(
        /Entrez votre courriel.../i
    );
    fireEvent.change(usernameInputElement, { target: { value: testValue } });
    fireEvent.change(passwordInputElement, { target: { value: testValue } });
    expect(signInButton).not.toBeDisabled();
});
