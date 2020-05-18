import * as React from 'react';
import { connect } from 'react-redux';
import { exploreAction } from '../../_actions/explore.action';
import { ExploreData } from '../../_types_/Explore/Explore';
import { RootReducerState } from '../../_types_/reducers/RootReducer';
import Nav from '../Nav';
import Footer from '../Footer';

interface ReducerType {
    ExploreData: ExploreData;
}

export interface Props {
    getExploreData: (para: string) => void;
    updateExploreData: (para: number) => void;
}

type PropertyWithHistory = Props & {history: History} & ReducerType;

class Explore extends React.Component<PropertyWithHistory> {

    componentDidMount() {
        this.props.getExploreData("explore");
    }

    updateExplore = (id: number) => {
        this.props.updateExploreData(id);
    }

    renderButton = (ele: any) => {
        if (!ele.follow) {
            return (<button onClick={() => this.updateExplore(ele.id)} className="explore-grid__follow-button">Follow</button>);
        }
        return (<button className="explore-grid__button">Following</button>);
    }

    renderExploreContent = () => {
        const { ExploreData: { exploreData } } = this.props;
        if(exploreData.length > 0) {
            return exploreData.map((el: any) => {
                return (
                    <div key={el.id} className="explore-grid__explore-wrapper">
                        <div className="explore-grid__explore">
                            <div className="explore-grid__img-wrapper">			
                                <img src={el.mainImage} alt="Img" className="explore-grid__img" />
                            </div>
                            <div className="explore-grid__feature">
                                <div className="explore-grid__feature-name">{el.text} <span className="explore-grid__followers">{el.followers} Followers</span></div>
                                <div className="explore-grid__avatars">
                                    {
                                        el.images.map((imageEl: string, index: number) => {
                                            return (<span key={index} className="explore-grid__avatar">
                                                <img src={imageEl} />
                                            </span>);
                                        })
                                    }
                                </div>
                            </div>
                            <span className="explore-grid__follow">{this.renderButton(el)}</span>
                        </div>
                    </div>
                );
            })
        }
        return (<div>No Data</div>);
    }

    render () {
        console.log(this.props);
        if(this.props.ExploreData.status === "LOADING") { return (<div>Loading......</div>) }
        return (
            <div className="page-container">
                <Nav />
                <div className="explore-container">
                    <div className="explore-grid explore-grid--flexbox">
                        <div className="explore-grid__wrapper">
                            { this.renderExploreContent()}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state: RootReducerState): ReducerType => ({
    ExploreData: state.exploreReducer,
});

export default connect(
    mapStateToProps,
    Object.assign({},
        exploreAction)
)(Explore);