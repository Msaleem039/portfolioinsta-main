import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type TranslationWrapperProps = {
    children: ReactNode;
};
// i have done some changes
const TranslationWrapper: React.FC<TranslationWrapperProps> = ({ children }) => {
    const { t } = useTranslation();

    return (
        <div>
            {React.Children.map(children, (child) => (
                <div>
                    {child}
                    <p>{t('hello')}</p>
                </div>
            ))}
        </div>
    );
};

export default TranslationWrapper;
