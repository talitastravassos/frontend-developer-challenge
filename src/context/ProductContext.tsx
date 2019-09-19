import React from 'react'
import axios from "axios";
interface State {
    products: any[],
    baseURL: string,
    nextPage: string,
    loading: boolean
}

interface IContext {
    state: State;
    action: {
        getProducts(url: string): void;
    };
}

export const ProductContext = React.createContext({} as IContext);
export default class ProductProvider extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            products: [],
            baseURL: "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1",
            nextPage: "",
            loading: false
        }
    }

    getProducts = (url: string) => {
        this.setState({loading: true})

        axios.get(url)
            .then(res => {
                this.setState({
                    products: this.state.products.concat(res.data.products),
                    nextPage: "https://" + res.data.nextPage,
                    loading: false
                })
            })

    }

    componentDidMount() {
        this.getProducts(this.state.baseURL)
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        const value = {
            state: { ...this.state },
            action: {
                getProducts: this.getProducts
            }
        }

        return <ProductContext.Provider value={value} {...this.props} />;
    }
}
