import {useTranslation} from "react-i18next";

const withUseTranslation = Component => {
    return function WrappedComponent(props) {
        const useTranslationValue = useTranslation();
        return <Component {...props} useTranslationValue={useTranslationValue} />;
    }
}

export default withUseTranslation