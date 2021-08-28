
import React from 'react';
import ReactJson from "react-json-view";


import Designer from 'react-designer-component';
import { Component, items } from 'react';
import SideBar from '../SideBar';


class DesignerClass extends Component {


    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    handleChangeItems = (items) => {
        this.setState({ items })
    }

    render() {
        return (
            <div className='d-flex justify-content-start'>
                <div>
                    <SideBar />
                </div>
                <div className='center'> 
                    <Designer
                        items={items}
                        onChangeItems={this.handleChangeItems}
                        fontApiKey="API_KEY"
                        paperSize={{
                            height: 300,
                            width: 600
                        }}
                    />
                </div>
                <div>
                    <ReactJson
                        collapseStringsAfterLength={50}
                        collapsed={2}
                        name="items"
                        style={{ height: 420, width: 400, overflow: "auto" }}
                        src={items}
                        theme="google"
                    />
                </div>
            </div>
        )
    }
}

export default DesignerClass;
