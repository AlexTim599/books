
import { screen, render } from '@testing-library/react'
import BooksCount from ".";
import { Provider } from "react-redux";
import App from '../../App';
import { store } from '../../redux/store'


describe('test app', () => {

    test('render components', () => {
        render(<Provider store={store} ><BooksCount /></Provider>)
        const count = screen.getByTestId('count')
        expect(count).toBeInTheDocument
        expect(count.innerHTML).toEqual(`<span> Найдено ${store.getState().books.booksCount}</span>`)


    })
})
