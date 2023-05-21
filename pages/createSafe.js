import React from "react";

import Theme from "../components/Theme";
import Head from "../index.js";
import Stats from "../components/Stats";
import Bounties from "../components/Bounties";
import StyledAppWrapper from "../components/StyledAppWrapper";
import StyledPageContentWrapper from "../components/StyledPageContentWrapper";
import StyledRefreshWarning from "../components/StyledRefreshWarning";
import Footer from "@mybit/ui.footer";
import Header from "@mybit/ui.task-market.header";
import Layout from "../components/Layout";
import Spin from "../components/Spin";

import createSafe from "../api/safe";
import StyledSpinner from "../components/Bounties/loading/StyledSpinner";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreatingSafe: false,
      creatingSafeMessage: "Creating Safe...",
      safeAddress: undefined
    };
    //   this.state = {
    //     sideBar: false,
    //     stats: [{
    //         name:"Total Value of Fund",
    //         loadingSize: "130"
    //       }, {
    //         name: "Total Payout",
    //         loadingSize: "130"
    //       }, {
    //         name: "Open Tasks",
    //         loadingSize: "50"
    //       }, {
    //         name: "Completed Tasks",
    //         loadingSize: "50"
    //       }, {
    //         name: "No. of Contributors",
    //         loadingSize: "50"
    //       }],
    //       orderBy: "Most recent",
    //       selectedCategory: "Development",
    //       categories: [],
    //       currentPage: 0,
    //       showCompletedTasks: false,
    //       pullingIssues: false,
    //       showAmountInCrypto: false,
    //   }
    //   this.hadleWelcomeClicked = this.hadleWelcomeClicked.bind(this);
  }

  arbitrumLinkHref = () => {
    // window.open("https://rinkeby.arbitrum.io/#/wallet", "_blank");
    const url = "https://rinkeby.arbitrum.io/#/wallet";
    return url;
  };

  createNewSafe = async () => {
    console.log("createNewSafe");
    this.setState({ isCreatingSafe: true });
    const safeAddress = await createSafe();
    this.setState({ safeAddress });
    this.setState({ isCreatingSafe: false });
  };
  render() {
    console.log("render");

    return (
      <Head>
        <Layout>
          <Header />
          <div onClick={this.createNewSafe}>Create Safe</div>
          {this.state.isCreatingSafe && (
            <StyledSpinner>
              <Spin size="large" styling={Theme.spin} />
              <p>{this.state.creatingSafeMessage}</p>
            </StyledSpinner>
          )}
          {this.state.safeAddress && (
            <div>Created safe address:{this.state.safeAddress}</div>
          )}
        </Layout>
      </Head>
    );
  }
}
