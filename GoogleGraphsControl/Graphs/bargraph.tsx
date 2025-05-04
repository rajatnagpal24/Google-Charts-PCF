import * as React from "react";
import { Chart } from "react-google-charts";

export interface IHelloWorldProps {
  value: string;
  GraphTitle: string;
  GraphType: string;
}

export interface IState {
  value: any;
  GraphTitle: string;
  GraphType: string;
}

class GoogleBarGraph extends React.Component<IHelloWorldProps, IState> {
  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      value: GoogleBarGraph.parseData(props.value), // Initialize state with parsed data
      GraphTitle: props.GraphTitle,
      GraphType: props.GraphType,
    };
  }

  static getDerivedStateFromProps(nextProps: IHelloWorldProps, nextState: IState): Partial<IState> | null {
    if (
      nextProps.value !== nextState.value ||
      nextProps.GraphTitle !== nextState.GraphTitle ||
      nextProps.GraphType !== nextState.GraphType
    ) {
      return {
        value: GoogleBarGraph.parseData(nextProps.value),
        GraphTitle: nextProps.GraphTitle,
        GraphType: nextProps.GraphType,
      };
    }
    return null;
  }

  private static parseData(value: string): any {
    try {
      return JSON.parse(value);
    } catch (error) {
      console.error("Error parsing JSON data", error);
      return []; // Return an empty array if JSON parsing fails
    }
  }

  public render(): React.ReactNode {
    const { GraphType, GraphTitle, value } = this.state;

    return (
      <Chart
        chartType={GraphType}
        data={value}
        options={{
          title: GraphTitle,
        }}
      />
    );
  }
}

export default GoogleBarGraph;
