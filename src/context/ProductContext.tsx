import React from 'react'

interface State {
    products: any[],
    nextPage: string
}

interface IContext {
    state: State;
    action: {
      test(): void;
    };
  }

export const ProductContext = React.createContext({} as IContext);

export default class ProductProvider extends  React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);
    
        this.state = {
            products: [],
            nextPage: ""
        }
    }

    test = () => {
        console.log("context ok")
    }

    render() {
        const value = {
            state: { ...this.state },
            action: {
                test: this.test
            }
        }

        return <ProductContext.Provider value={value} {...this.props} />;
    }
}
