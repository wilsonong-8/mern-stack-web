import React from 'react';
import { Accordion } from '../../components';
import '../../assets/scss/main.scss';

import illustration__woman_desktop from '../../assets/images/illustration-woman-online-desktop.svg';
import illustration__woman_mobile from '../../assets/images/illustration-woman-online-mobile.svg';

const hdbGuide = [
  {
    title: 'Step 1: Register Intent to Sell',
    description: (
      <>
        <p>
          To start the selling process, you have to register your Intent to
          Sell. To do that, you need to:
        </p>
        <ul>
          <li>
            Go to the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://iam.hdb.gov.sg/common/login?spcptracking=1685939458748__a172_7caa6b4f5a14"
            >
              HDB resale portal
            </a>{' '}
          </li>
          <li>Click “I am a Buyer or Seller”</li>
          <li>Proceed to log in with your Singpass</li>
        </ul>
        <p>Upon registration, you’ll receive:</p>
        <ul>
          <li>An instant assessment of your eligibility to sell</li>
          <li>
            The Ethnic Integration Policy/ Singapore Permanent Resident (EIP/
            SPR) Quota for your block
          </li>
          <li>The status of upgrading and billing of upgrading costs</li>
          <li>Recent transacted prices of nearby HDB flats</li>
        </ul>
        <p>
          <b>IMPORTANT</b>: Your HDB Intent to Sell is valid for only 12 months
          (1 year), so you need to submit the HDB resale application within that
          time. Otherwise, you’ll have to submit another application.
        </p>
        <p>
          To understand more about your Eligibility, Ethnic and SPR Quota and
          special cases like bankruptcy and divorce, visit{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hdb.gov.sg/residential/selling-a-flat/eligibility"
          >
            HDB's portal
          </a>{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Step 2: Calculate HDB sale proceeds',
    description: (
      <>
        <p>
          To calculate the sales profit for your HDB resale, consider the
          following factors:
        </p>
        <ul>
          <li>Sale price of your home</li>
          <li>Outstanding loan</li>
          <li>Refund of CPF OA used + Accrued interest</li>
          <li>Property agent fee</li>
          <li>Legal fee</li>
          <li>HDB resale fee</li>
          <li>Profit</li>
        </ul>

        <table>
          <tr>
            <td>Selling Price</td>
            <td>$500,000</td>
          </tr>
          <tr>
            <td>Outstanding HDB Loan Amount</td>
            <td>$180,000</td>
          </tr>
          <tr>
            <td>CPF Refund (Mr Lim)</td>
            <td>$70,000</td>
          </tr>
          <tr>
            <td>CPF Refund (Mrs Lim)</td>
            <td>$70,000</td>
          </tr>
          <tr>
            <td>Resale Levy (if any)</td>
            <td>NA</td>
          </tr>
          <tr>
            <td>HDB Legal Fee*</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>HDB Admin Fee</td>
            <td>$80</td>
          </tr>
          <tr>
            <td>Total Cash Proceeds from HDB</td>
            <td>$179,420</td>
          </tr>
        </table>
        <p>
          *If you took a bank loan for your mortgage, you'll have to engage a
          private lawyer which will cost around $1,500.
        </p>
      </>
    ),
  },
  {
    title: 'Step 3: Post your HDB flat for sale',
    description: (
      <>
        <p>
          Now that you’ve registered your Intent to Sell with HDB, have gotten
          an estimation of your eligibility, and know pretty much how much to
          expect at the end of your sale, it’s time to put your HDB resale flat
          in the market.
        </p>
        <p>
          First, you need to determine how much your unit is worth. We have a{' '}
          <a target="_blank" rel="noreferrer" href="/past-transaction">
            past transaction page
          </a>
          , enter your address to find out past transaction prices in your area.
          Alternatively, you can use{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://services2.hdb.gov.sg/web/fi10/emap.html"
          >
            {' '}
            HDB Map Services
          </a>{' '}
          to get more information about your block. You can also get a free
          valuation from{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://forms.uob.com.sg/property/valuation/"
          >
            UOB's valuation website
          </a>{' '}
          .
        </p>
        <p>
          Next is to start posting your listing. It is best to include photos of
          every room in your flat, so make sure every area is tidy, remove any
          personal paraphernalia and make sure the house is bright before you
          start taking photos. You can check out{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.mynicehome.gov.sg/hdb-how-to/sell-your-flat/arranging-hdb-flat-viewings-tips-for-sellers/"
          >
            HDB's guide
          </a>{' '}
          on how to prepare your house for a viewing.
        </p>
        <p>
          How to post your HDB flat for sale without a property agent? Our
          platform provides you the service to post your advertisement
          absolutely for free. You can try out other free advertising platforms
          to get more exposure. The most popular ones are{' '}
          <a target="_blank" rel="noreferrer" href="https://www.carousell.sg/">
            Carousell
          </a>{' '}
          ,{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/marketplace"
          >
            Facebook Marketplace
          </a>{' '}
          and{' '}
          <a target="_blank" rel="noreferrer" href="https://www.99.co/">
            99.co
          </a>
        </p>
      </>
    ),
  },
  {
    title: 'Step 4: Arrange viewings and conduct negotiations',
    description: (
      <div>
        <p>
          Schedule all your viewings in one day, instead of spreading it out
          over the week or multiple weekends. Doing so creates a case of FOMO
          amongst buyers coming and going as they will see other potential
          bidders also viewing your property, giving the impression that they
          have to outbid the rest to secure your HDB flat.
        </p>
        <p>
          Print out the floor plan of your unit which will be sent to you for
          free after you've done your Intent to Sell. Explain to the buyers the
          potential of the layout if there are any, for example, being able to
          hack the walls to enlarge an area.
        </p>
        <p>
          Before granting the Option to Purchase (OTP) to your buyer, remember
          these 3 things:
        </p>
        <ol>
          <li>
            You need to complete the Intent to Sell at least 7 days before
            granting the Option to Purchase (OTP).
          </li>
          <li>
            The buyer will need to have a valid HDB Loan Eligibility letter
            before you can grant the OTP.
          </li>
          <li>
            If the buyer intends to get a bank loan, he/she must have a Letter
            of Offer before he/she can exercise the OTP.
          </li>
        </ol>
      </div>
    ),
  },
  {
    title: 'Step 5: Grant Option to Purchase (OTP) to HDB buyer',
    description: (
      <div>
        <p>
          Upon registering your Intent to Sell, you will have a 7-day cooling
          period before you’re allowed to grant the OTP. You can download a copy
          of the HDB-prescribed OTP form on the HDB resale portal.
        </p>
        <p>
          Remember: Once you have issued an OTP to a buyer, you will not be able
          to accept any other offers for about 21 days. (This is the same amount
          of time a buyer has to exercise the OTP. More on this below.)
        </p>
        <p>
          Also, signing the OTP means that you have officially accepted the
          offer from the buyer to purchase your flat. So make sure you’re
          satisfied with the deal before signing anything.
        </p>
        <p>
          After granting the OTP, you may collect an Option fee ranging from
          $1-$1,000 from the buyer. (The market norm these days is $1,000. The
          Option fee is non-refundable should the buyer not go through with
          buying your HDB resale flat.)
        </p>
        <p>
          A more detailed guide can be found on HDB's{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hdb.gov.sg/residential/selling-a-flat/plan-source-and-contract/option-to-purchase"
          >
            Option to Purchase
          </a>{' '}
          Page.
        </p>
      </div>
    ),
  },

  {
    title: 'Step 6: Discuss Temporary Extension of Stay',
    description: (
      <div>
        <p>
          If you’re unable to move out of your home by the completion date, you
          can submit your request for a Temporary Extension of Stay along with
          your HDB resale application. (The buyer will have to state their
          consent when they submit their own resale application.)
        </p>
        <p>
          Basically, this is a private agreement between you and the buyer that
          allows you to stay for up to 3 months in your flat after the resale
          completion.
        </p>
        <p>
          Type out a formal letter directed at HDB stating the reason and
          duration for your extension. End it with the signature for both seller
          and the buyer. Scan the document and forward it to the HDB officer
          that will be assigned to your case.
        </p>
        <p>
          Please read the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/request-for-temporary-extension-of-stay"
          >
            Terms and Conditions
          </a>{' '}
          on HDB's website before applying for extension of stay{' '}
        </p>
      </div>
    ),
  },
  {
    title: 'Step 7: Buyer exercises the OTP and pays Option fee',
    description: (
      <div>
        <p>
          When you’ve agreed on a price with the buyer, and have discussed the
          terms of the Temporary Extension of Stay (if necessary), the buyer can
          now exercise the OTP and send you the payment for the exercise fee.
          This, together with the Option fee, will form the deposit, which
          cannot exceed $5,000. For example, if the buyer paid $1,000 for the
          Option fee, the exercise fee should be less than $4,000.
        </p>
        <p>
          Again, the OTP is only valid for 21 days and must be exercised within
          that period. Buyers have up to 4 p.m. on the 21st day (weekends and
          public holidays included) after the date of OTP issuance to exercise
          the OTP.
        </p>
        <p>What if the OTP is cancelled?</p>
        <p>
          However, should the buyer not wish to proceed with the purchase, the
          OTP will lapse and expire. You can then restart the viewing process
          with other prospects.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 8: Submit HDB resale application',
    description: (
      <div>
        <p>
          At this stage, you and the buyer may complete the resale application
          on the{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://services2.hdb.gov.sg/web/bp28/TimeLine/my-flat-dashboard"
          >
            HDB Resale Portal
          </a>
          . However, you and the buyer have to submit it separately and within 7
          days of each other. So you’ll have to agree to a timeframe with the
          buyer in order to execute this.
        </p>
        <p>
          Here’s a list of details you’ll need to provide when filling up the
          HDB resale application form:
        </p>
        <ul>
          <li>Resale flat address</li>
          <li>OTP details</li>
          <li>Soft copy of OTP</li>
          <li>Your personal particulars</li>
        </ul>
        <p>
          To submit your HDB resale application, you’ll have to pay an
          administrative fee: It’s $40 for 1- and 2-room flats, and $80 for
          3-room and bigger flats.
        </p>
        <p>
          You can check the status of your application on the HDB resale portal.
        </p>
        <p>
          More information can be found on HDB's{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/application"
          >
            {' '}
            Resale Application
          </a>{' '}
          Page.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 9: Contact a conveyancing lawyer',
    description: (
      <div>
        <p>
          Conveyancing basically means transferring the title of your property
          to another person, and it usually involves:
        </p>
        <ol>
          <li>
            Checking if there are no outstanding mortgages or legal claims
            against the HDB resale flat to ensure that it’s eligible for
            transfer of ownership.
          </li>
          <li>
            Negotiating and finalizing the terms of the sale, like the terms of
            the OTP.
          </li>
          <li>
            Arranging for the transfer of ownership to be registered with the
            relevant authority, which may involve paying for the stamp duty or
            other fees.
          </li>
          <li>
            You will also need to engage a conveyancing lawyer if you have an
            existing bank loan, so you can refinance your existing loan.
          </li>
        </ol>
        <p>Now, there are 2 ways you can get a conveyancing lawyer:</p>
        <ol>
          <li>
            Engage HDB’s legal services. You can go to the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://services2.hdb.gov.sg/webapp/BB14LFEESENQ/BB14PHomePage.jsp"
            >
              Legal Fees Enquiry Facility{' '}
            </a>{' '}
            to get an estimate of the legal fees you’ll have to pay.
          </li>
          <li>Look for conveyancing lawyers from online searches.</li>
        </ol>
      </div>
    ),
  },

  {
    title: 'Step 10: Endorse HDB resale documents',
    description: (
      <div>
        <p>
          You will receive an SMS from HDB within 10 working days informing you
          when you can accept the terms and conditions for all the documents
          prepared for you through the HDB resale portal. You’ll have to endorse
          all the HDB resale documents within 6 days of receiving the SMS. Once
          it’s been endorsed, you will receive an in-principle approval for your
          HDB resale flat.
        </p>
        <p>
          More information can be found on HDB's{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/acceptance-and-approval"
          >
            {' '}
            Acceptance and Approval
          </a>{' '}
          page.
        </p>
      </div>
    ),
  },
  {
    title: 'Step 11: Pay legal fees and other HDB resale costs',
    description: (
      <div>
        <p>
          With the paperwork out of the way, it’s time to make some payments. If
          you engaged HDB’s legal services, you can get an estimate of the cost
          on HDB’s{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://services2.hdb.gov.sg/webapp/BB14LFEESENQ/BB14PHomePage.jsp"
          >
            Legal Fees Enquiry Facility{' '}
          </a>
          . But if you engaged your own solicitor from a law firm, they will
          advise you on the payable fees.
        </p>
        <p>
          If you took a bank loan and engaged a private lawyer for legal
          conveyancing, the fees will be around $1,500.
        </p>
        <p>
          Also, there’s a $40-80 administrative fee for the submission of your
          HDB resale transaction:
        </p>
        <ul>
          <li>$40 for 1- and 2-room flats</li>
          <li>$80 for 3-room and bigger flats</li>
        </ul>
        <p>
          The HDB flat inspection may also happen at this stage. Technical
          Executives from an HDB branch will come down to inspect your flat for
          any structural damages and unauthorised modifications. This is to
          ensure that your apartment does not compromise the integrity of the
          entire building or the safety of the new flat owners, which means if
          they spot anything, you won’t be able to complete the HDB resale
          transaction until the flat’s original state has been restored.
        </p>
        <p>
          Should you be out of the country and unable to attend this inspection,
          you can have another person attend on your behalf for this if you have
          a Power of Attorney.
        </p>
        <p>
          More information can be found on HDB's{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/acceptance-and-approval"
          >
            {' '}
            Acceptance and Approval
          </a>{' '}
          page.
        </p>
      </div>
    ),
  },

  {
    title: 'Step 12: Receive HDB approval letter',
    description: (
      <div>
        <p>
          After the inspection, you can expect to receive an SMS or email to
          notify you that HDB’s approval letter has been posted on the HDB
          resale portal.
        </p>
        <p>
          Your HDB appointment will take place 8 weeks from the date of HDB’s
          acceptance of the resale application, if the necessary documents are
          submitted accurately and on time.
        </p>
      </div>
    ),
  },

  {
    title: 'Step 13: Prepare for the Resale Completion',
    description: (
      <div>
        <p>
          To prepare for your HDB resale completion appointment, you’ll need to:
        </p>
        <ul>
          <li>Fix any unauthorised renovation work.</li>
          <li>
            Terminate any automated GIRO payments and settle any outstanding
            payments such as property tax (payable up to the end of the year) or
            service and conservancy charges (payable up to the day of the resale
            completion).
          </li>
          <li>
            Prepare to vacate your flat before the date of completion so the
            buyer can move in on time. After vacating, ensure that you’re ready
            to handover the keys to the buyer during the completion appointment.
          </li>
        </ul>
      </div>
    ),
  },

  {
    title: 'Step 14: Attend Resale Completion Appointment',
    description: (
      <div>
        <p>
          This is the last thing you’ll have to do to complete your HDB selling
          process! You’ll have to attend the HDB resale Completion Appointment
          at HDB Hub to witness the following:
        </p>
        <ol>
          <li>Signing of the transfer document of the resale flat</li>
          <li>
            Signing of the mortgage document/agreement (only applicable for HDB
            loans)
          </li>
          <li>
            Handover of keys (if the buyer opted for a bank loan, the bank’s
            lawyer can be authorised to collect the keys on the buyer’s behalf).
          </li>
        </ol>
        <p>
          You will receive your net sale proceeds at this point. HDB will refund
          any CPF monies to your CPF account within 10-14 working days from the
          date of the completion appointment.
        </p>
        <p>
          But take note that the HDB resale application will be cancelled if any
          of these occur:
        </p>
        <ol>
          <li>
            You or the buyer do not go through the sale or purchase of the flat
            for any reason whatsoever.
          </li>
          <li>
            You or the buyer withdraw your application by giving notice in
            writing to HDB.
          </li>
          <li>
            You do not have sufficient CPF savings or cash to finance the
            purchase of the resale flat.
          </li>
          <li>
            The information given in the resale application by you or the buyer
            is incorrect or any information has been omitted by either party.
          </li>
          <li>
            You or the buyer are not eligible to retain the resale application
            under HDB’s policies.
          </li>
        </ol>
        <h3>Congratulations on selling your home!</h3>
      </div>
    ),
  },
];

const SellingGuide = () => {
  return (
    <div>
      <div className="container">
        <div className="component">
          <div className="illustration">
            <img
              className="illustration__woman-desktop"
              src={illustration__woman_desktop}
              alt="illustration with woman"
            />
            <img
              className="illustration__woman-mobile"
              src={illustration__woman_mobile}
              alt="illustration with woman"
            />
          </div>
          <Accordion document={hdbGuide} />
        </div>
      </div>
    </div>
  );
};
export default SellingGuide;
