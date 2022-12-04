import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import useQuestion from "../src/utils/useQuestion"

const TestComponent = () => {
    const [questions, addQuestion, changeQuestion, deleteQuestion] = useQuestion()

    return (
        <div className='test-name'>
            {questions.name}
        </div>
    )
}

describe('Testing useQuestion hook', () => {
    it('should render', () => {
        const { getByText } = render(<TestComponent />);
        expect(getByText("Test")).toBeInTheDocument();
    });
}
)


