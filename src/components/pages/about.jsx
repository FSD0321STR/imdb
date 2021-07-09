import React from 'react';
import Typography from '@material-ui/core/Typography';
import "./about.css" 
export default function About() {

    return (
        <div class="about">
            <div class="container flex">
                <div id="left">
                    <p class="section-heading__kicker heading--5 text-left--tablet-up text-center--mobile color-black">About us</p>
                    <h1 class="section-heading__heading heading--1 text-left--tablet-up text-center--mobile about-hero__heading">Reviwer powers over 1,700,000 businesses worldwide</h1>
                    <p class="section-heading__subhead heading--2 heading--3 text-left--tablet-up text-center--mobile">
                        We are a website developed from 3 guys who started studying
                        online programming, and they made us create a project, which you are seeing right now.

                        Reviwer is a page so that you can see react and comment on posts, blogs or
                        technological categories that you like the most.
                        Between everyone in the community we bring and post new news or technological trends
                        in the page.
                    </p>
                    <p class="section-heading__kicker heading--5 text-left--tablet-up text-center--mobile color-black">Our mission</p>
                    <p class="section-heading__subhead heading--2 heading--3 text-left--tablet-up text-center--mobile">
                        We help people to surf the internet more easily,
                        If you are looking for information about something or something we try to give the
                        information so that they can be entertained, learn and much more.
                    </p>
                </div>
                <div id="right">
                    <div class="img">
                        <img alt="" data-sizes="100vw" data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-small-2a2faf4cb65f77ff8a7957d0f3f5c335a0d13a328f773d30ae252d81e8475dce.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-large-1645be52ccc028603eae98b741a63fb2f83d7765f916780c44e59801d1db3369.png?quality=50 2x" class=" lazyloaded" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-small-2a2faf4cb65f77ff8a7957d0f3f5c335a0d13a328f773d30ae252d81e8475dce.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-large-1645be52ccc028603eae98b741a63fb2f83d7765f916780c44e59801d1db3369.png?quality=50 2x" />
                    </div>
                </div>
            </div>

            <div class="container flex">

                <div id="right">
                    <div class="img">
                        <img alt="" data-sizes="100vw" data-srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-small-2a2faf4cb65f77ff8a7957d0f3f5c335a0d13a328f773d30ae252d81e8475dce.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-large-1645be52ccc028603eae98b741a63fb2f83d7765f916780c44e59801d1db3369.png?quality=50 2x" class=" lazyloaded" sizes="100vw" srcset="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-small-2a2faf4cb65f77ff8a7957d0f3f5c335a0d13a328f773d30ae252d81e8475dce.png 1x, https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/assembly/about-hero-large-1645be52ccc028603eae98b741a63fb2f83d7765f916780c44e59801d1db3369.png?quality=50 2x" />
                    </div>
                </div>
                <div id="left">
                    <p class="section-heading__kicker heading--5 text-left--tablet-up text-center--mobile color-black">Our mission</p>
                    <p class="section-heading__subhead heading--2 heading--3 text-left--tablet-up text-center--mobile">
                        We help people to surf the internet more easily,
                        If you are looking for information about something or something we try to give the
                        information so that they can be entertained, learn and much more.
                    </p>
                </div>

            </div>


        </div>
    );
}