import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import GoogleBarGraph, { IHelloWorldProps } from "./Graphs/bargraph"

export class GoogleGraphsControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private _root:any;
    private _notifyOutputChanged: () => void;
    private props: IHelloWorldProps = {
       value: "",
       GraphTitle :"",
       GraphType: ""
    };

    public init(context: ComponentFramework.Context<IInputs>,notifyOutputChanged: () => void,state: ComponentFramework.Dictionary,container: HTMLDivElement
    ): void {
        this._container = container;
        this.props.value = context.parameters.sampleProperty.raw || "";
        this.props.GraphTitle = context.parameters.GraphTitle.raw || "";
        this.props.GraphType = context.parameters.GraphType.raw || "";

    }
    private renderElement() {
        if (this._root==null) {
            this._root = ReactDOM.createRoot(this._container);
            this._root.render(
            React.createElement(GoogleBarGraph, this.props)
        );
        }else{

            this._root.render(
            React.createElement(GoogleBarGraph, this.props)
  );
}       
    }
    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this.props.GraphTitle = context.parameters.GraphTitle.raw || "";
        this.props.GraphType  = context.parameters.GraphType.raw  || "";
        this.props.value  = context.parameters.sampleProperty.raw  || "";
        this.renderElement();
    }
    public getOutputs(): IOutputs {
        return {};
    }
    public destroy(): void {
        //
    }
}
