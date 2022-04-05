import App from "./App";
import { screen, render } from '@testing-library/react'
import { store } from "./redux/store";
import { Provider } from "react-redux";



describe('test app', () => {

    test('render components', () => {
        render(<Provider store={store}><App />
        </Provider>)
        expect(screen.getByTestId('searh')).toBeInTheDocument;

    })
})
