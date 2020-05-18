import * as React from 'react';

export interface Props {
    TrandsData: any;
}

class TrandInfo extends React.Component<Props> {
    render () {
        const { TrandsData: { trandData } } = this.props;
        return (trandData.map((element: any, index: number) => {
            if (index % 2 === 0) {
                return (<div key={element.id} className="tout-container">
                    <div><img src={element.image} /></div>
                    <div className="tout-text"><h1>{element.heading}</h1>{element.text}</div>
                </div>)
            } else {
                return (<div key={element.id} className="tout-container">
                    <div className="tout-text"><h1>{element.heading}</h1>{element.text}</div>
                    <div><img src={element.image} /></div>
                </div>)
            }
        }));
    }
}

export default TrandInfo;