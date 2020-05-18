import * as React from 'react';
import { connect } from 'react-redux';
import { trandsAction } from '../_actions/trands.action';
import { TrandsData } from '../_types_/Trands/Trands';
import { RootReducerState } from '../_types_/reducers/RootReducer';
;import banner from '../images/banner/banner.jpg';
import Footer from './Footer';
import TrandInfo from './TrandInfo';
import Nav from './Nav';
import Comment from './Comment';

interface ReducerType {
    TrandsData: TrandsData;
}

export interface Props {
    getTrandsData: (para: string) => void;
}

type PropertyWithHistory = Props & {history: History} & ReducerType;

class Trand extends React.Component<PropertyWithHistory> {
    componentDidMount() {
        this.props.getTrandsData("trands");
    }
    
    render() {
        if(this.props.TrandsData.status === "LOADING") { return (<div>Loading......</div>) }
        return (
            <div className="page-container">
                <Nav />
                <div className="trand-container">
                    <div className="banner"><img src={banner} /></div>
                    <div className="vertical-space" />
                    <div className="info-text">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, put the potentially record low maximum sea ice extent this year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</div>
                    <div className="vertical-space" />
                    <TrandInfo TrandsData={this.props.TrandsData} />
                    <div className="vertical-space" />
                    <div className="info-text">For a start, it does not automatically follow that a record amount if ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and tempratures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.</div>
                    <div className="vertical-space" />
                    <div className="video-content">
                        <video className="video" controls={true}>
                            <source src="https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_1280_10MG.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <Comment />
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state: RootReducerState): ReducerType => ({
    TrandsData: state.trandsReducer,
});

export default connect(
    mapStateToProps,
    Object.assign({},
        trandsAction)
)(Trand);