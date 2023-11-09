import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Title from '../components/sellingGuide/Title';
import CustomText from '../components/sellingGuide/CustomText';

const hdbGuide = {
  1: {
    title: 'Step 1: Register Intent to Sell',
    description: (
      <>
        <Text>
          To start the selling process, you have to register your Intent to
          Sell. To do that, you need to:
        </Text>
        <Text>
          1. Go to the{' '}
          <CustomText link='https://iam.hdb.gov.sg/common/login?spcptracking=1685939458748__a172_7caa6b4f5a14'>HDB resale portal</CustomText>
        </Text>
        <Text>2. Click “I am a Buyer or Seller”</Text>
        <Text>3. Proceed to log in with your SINGPASS</Text>
        <Text>Upon registration, you’ll receive:</Text>
        <Text>- An instant assessment of your eligibility to sell</Text>
        <Text>
          - The Ethnic Integration Policy/ Singapore Permanent Resident (EIP/
          SPR) Quota for your block
        </Text>
        <Text>- The status of upgrading and billing of upgrading costs</Text>
        <Text>- Recent transacted prices of nearby HDB flats</Text>
        <Text>
          IMPORTANT: Your HDB Intent to Sell is valid for only 12 months (1
          year), so you need to submit the HDB resale application within that
          time. Otherwise, you’ll have to submit another application.
        </Text>
        <Text>
          To understand more about your Eligibility, Ethnic and SPR Quota and
          special cases like bankruptcy and divorce, visit{' '}
          <CustomText link='https://www.hdb.gov.sg/residential/selling-a-flat/eligibility'>
          HDB's portal.
          </CustomText>
        </Text>
      </>
    ),
  },
  2: {
    title: 'Step 2: Calculate HDB sale proceeds',
    description: (
      <>
        <Text>
          To calculate the sales profit for your HDB resale, consider the
          following factors:
        </Text>
        <Text>- Sale price of your home</Text>
        <Text>- Outstanding loan</Text>
        <Text>- Refund of CPF OA used + Accrued interest</Text>
        <Text>- Property agent fee</Text>
        <Text>- Legal fee</Text>
        <Text>- HDB resale fee</Text>
        <Text>- Profit</Text>
        <Text>Selling Price: $500,000</Text>
        <Text>Outstanding HDB Loan Amount: $180,000</Text>
        <Text>CPF Refund (Mr Lim): $70,000</Text>
        <Text>CPF Refund (Mrs Lim): $70,000</Text>
        <Text>Resale Levy (if any): NA</Text>
        <Text>HDB Legal Fee*: $500</Text>
        <Text>HDB Admin Fee: $80</Text>
        <Text>Total Cash Proceeds from HDB: $179,420</Text>
        <Text>
          *If you took a bank loan for your mortgage, you'll have to engage a
          private lawyer which will cost around $1,500.
        </Text>
      </>
    ),
  },
  3: {
    title: 'Step 3: Post your HDB flat for sale',
    description: (
      <>
        <Text>
          Now that you’ve registered your Intent to Sell with HDB, have gotten
          an estimation of your eligibility, and know pretty much how much to
          expect at the end of your sale, it’s time to put your HDB resale flat
          in the market.
        </Text>
        <Text>
          First, you need to determine how much your unit is worth. We have a{' '}
          past transaction page
          , enter your address to find out past transaction prices in your area.
          Alternatively, you can use{' '}
          <CustomText link='https://services2.hdb.gov.sg/web/fi10/emap.html'>
          HDB Map Services
          </CustomText>{' '}
          to get more information about your block. You can also get a free
          valuation from{' '}
          <CustomText link='https://forms.uob.com.sg/property/valuation/'>
            UOB valuation website
          </CustomText>
         .
        </Text>
        <Text>
          Next is to start posting your listing. It is best to include photos of
          every room in your flat, so make sure every area is tidy, remove any
          personal paraphernalia and make sure the house is bright before you
          start taking photos. You can check out{' '}
          <CustomText link='https://www.mynicehome.gov.sg/hdb-how-to/sell-your-flat/arranging-hdb-flat-viewings-tips-for-sellers/'>
          HDB's guide
          </CustomText>{' '}
          on how to prepare your house for a viewing.
        </Text>
        <Text>
          How to post your HDB flat for sale without a property agent? Our
          platform provides you the service to post your advertisement
          absolutely for free. You can try out other free advertising platforms
          to get more exposure. The most popular ones are{' '}
          <CustomText link='https://www.carousell.sg/'> 
          Carousell</CustomText>
          ,{' '}
          <CustomText link='https://www.facebook.com/marketplace'>
          Facebook Marketplace
          </CustomText> {' '}
          and{' '}
          <CustomText link='https://www.99.co/'>
          99.co
          </CustomText>
          .
        </Text>
      </>
    ),
  },
  4: {
    title: 'Step 4: Arrange viewings and conduct negotiations',
    description: (
      <>
        <Text>
          Schedule all your viewings in one day, instead of spreading it out
          over the week or multiple weekends. Doing so creates a case of FOMO
          amongst buyers coming and viewing. With multiple buyers viewing at the
          same time, the urgency to make an offer increases.
        </Text>
        <Text>
          Be open to negotiations from buyers, especially if your house has been
          on the market for a long time. Be ready to compromise on the price to
          close the deal. Consider all offers before accepting or rejecting.
          Discuss with your family on the acceptable price before going ahead
          with the deal.
        </Text>
        <Text>
          However, be mindful of lowballers who might offer a significantly
          lower price. Lowballers are buyers who offer a price much lower than
          the market value, often unrealistically low. If you receive a
          lowballing offer, you can choose to negotiate or reject it.
        </Text>
        <Text>
          It is also essential to be aware of your Minimum Occupation Period
          (MOP). HDB flats have a MOP of 5 years, which means you can only sell
          your flat after living in it for at least 5 years. Check your MOP
          before proceeding with the sale.
        </Text>
      </>
    ),
  },

  5: {
    title: 'Step 5: Grant Option to Purchase (OTP) to HDB buyer',
    description: (
      <>
        <Text>
          Upon registering your Intent to Sell, you will have a 7-day cooling
          period before you’re allowed to grant the OTP. You can download a copy
          of the HDB-prescribed OTP form on the HDB resale portal.
        </Text>
        <Text>
          Remember: Once you have issued an OTP to a buyer, you will not be able
          to accept any other offers for about 21 days. (This is the same amount
          of time a buyer has to exercise the OTP. More on this below.)
        </Text>
        <Text>
          Also, signing the OTP means that you have officially accepted the
          offer from the buyer to purchase your flat. So make sure you’re
          satisfied with the deal before signing anything.
        </Text>
        <Text>
          After granting the OTP, you may collect an Option fee ranging from
          $1-$1,000 from the buyer. (The market norm these days is $1,000. The
          Option fee is non-refundable should the buyer not go through with
          buying your HDB resale flat.)
        </Text>
        <Text>
          A more detailed guide can be found on HDB's{' '}
          <CustomText link='https://www.hdb.gov.sg/residential/selling-a-flat/plan-source-and-contract/option-to-purchase'>
          Option to Purchase
          </CustomText>{' '}
          Page.
        </Text>
      </>
    ),
  },

  6: {
    title: 'Step 6: Discuss Temporary Extension of Stay',
    description: (
      <>
        <Text>
          If you’re unable to move out of your home by the completion date, you
          can submit your request for a Temporary Extension of Stay along with
          your HDB resale application. (The buyer will have to state their
          consent when they submit their own resale application.)
        </Text>
        <Text>
          Basically, this is a private agreement between you and the buyer that
          allows you to stay for up to 3 months in your flat after the resale
          completion.
        </Text>
        <Text>
          Type out a formal letter directed at HDB stating the reason and
          duration for your extension. End it with the signature for both seller
          and the buyer. Scan the document and forward it to the HDB officer
          that will be assigned to your case.
        </Text>
        <Text>
          Please read the{' '}
          <CustomText link='https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/request-for-temporary-extension-of-stay'>
          Terms and Conditions
          </CustomText>{' '}
          on HDB's website before applying for an extension of stay.
        </Text>
      </>
    ),
  },

  7: {
    title: 'Step 7: Buyer exercises the OTP and pays Option fee',
    description: (
      <>
        <Text>
          When you’ve agreed on a price with the buyer and have discussed the
          terms of the Temporary Extension of Stay (if necessary), the buyer can
          now exercise the OTP and send you the payment for the exercise fee.
          This, together with the Option fee, will form the deposit, which
          cannot exceed $5,000. For example, if the buyer paid $1,000 for the
          Option fee, the exercise fee should be less than $4,000.
        </Text>
        <Text>
          Again, the OTP is only valid for 21 days and must be exercised within
          that period. Buyers have up to 4 p.m. on the 21st day (weekends and
          public holidays included) after the date of OTP issuance to exercise
          the OTP.
        </Text>
        <Text>What if the OTP is canceled?</Text>
        <Text>
          However, should the buyer not wish to proceed with the purchase, the
          OTP will lapse and expire. You can then restart the viewing process
          with other prospects.
        </Text>
      </>
    ),
  },

  8: {
    title: 'Step 8: Submit HDB resale application',
    description: (
      <>
        <Text>
          At this stage, you and the buyer may complete the resale application
          on the{' '}
          <CustomText link='https://services2.hdb.gov.sg/web/bp28/TimeLine/my-flat-dashboard'>
          HDB Resale Portal
          </CustomText>
          . However, you and the buyer have to submit it separately and within 7
          days of each other. So you’ll have to agree to a timeframe with the
          buyer in order to execute this.
        </Text>
        <Text>
          Here’s a list of details you’ll need to provide when filling up the
          HDB resale application form:
        </Text>
        <Text>- Resale flat address</Text>
        <Text>- OTP details</Text>
        <Text>- Soft copy of OTP</Text>
        <Text>- Your personal particulars</Text>
        <Text>
          To submit your HDB resale application, you’ll have to pay an
          administrative fee: It’s $40 for 1- and 2-room flats and $80 for
          3-room and bigger flats.
        </Text>
        <Text>
          You can check the status of your application on the HDB resale portal.
        </Text>
        <Text>
          More information can be found on HDB's{' '}
          <CustomText link='https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/application'>
          Resale Application
          </CustomText>{' '}
          Page.
        </Text>
      </>
    ),
  },

  9: {
    title: 'Step 9: Contact a conveyancing lawyer',
    description: (
      <>
        <Text>
          Conveyancing basically means transferring the title of your property
          to another person, and it usually involves:
        </Text>
        <Text>
          - Checking if there are no outstanding mortgages or legal claims
          against the HDB resale flat to ensure that it’s eligible for transfer
          of ownership.
        </Text>
        <Text>
          - Negotiating and finalizing the terms of the sale, like the terms of
          the OTP.
        </Text>
        <Text>
          - Arranging for the transfer of ownership to be registered with the
          relevant authority, which may involve paying for the stamp duty or
          other fees.
        </Text>
        <Text>
          - You will also need to engage a conveyancing lawyer if you have an
          existing bank loan, so you can refinance your existing loan.
        </Text>
        <Text>Now, there are 2 ways you can get a conveyancing lawyer:</Text>
        <Text>
          1. Engage HDB’s legal services. You can go to the{' '}
          <CustomText Fees Enquiry FacilityText link='https://services2.hdb.gov.sg/webapp/BB14LFEESENQ/BB14PHomePage.jsp'>
          Legal Fees Enquiry Facility
          </CustomText>{' '}
          to get an estimate of the legal fees you’ll have to pay.
        </Text>
        <Text>2. Look for conveyancing lawyers from online searches.</Text>
      </>
    ),
  },

  10: {
    title: 'Step 10: Endorse HDB resale documents',
    description: (
      <>
        <Text>
          You will receive an SMS from HDB within 10 working days informing you
          when you can accept the terms and conditions for all the documents
          prepared for you through the HDB resale portal. You’ll have to endorse
          all the HDB resale documents within 6 days of receiving the SMS. Once
          it’s been endorsed, you will receive an in-principle approval for your
          HDB resale flat.
        </Text>
        <Text>
          More information can be found on HDB's{' '}
          <CustomText link= 'https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/acceptance-and-approval'>
          Acceptance and Approval
          </CustomText>{' '}
          page.
        </Text>
      </>
    ),
  },

  11: {
    title: 'Step 11: Pay legal fees and other HDB resale costs',
    description: (
      <>
        <Text>
          With the paperwork out of the way, it’s time to make some payments. If
          you engaged HDB’s legal services, you can get an estimate of the cost
          on HDB’s{' '}
          <CustomText link='https://services2.hdb.gov.sg/webapp/BB14LFEESENQ/BB14PHomePage.jsp'>
          Legal Fees Enquiry Facility
          </CustomText>{' '}
          . But if you engaged your own solicitor from a law firm, they will
          advise you on the payable fees.
        </Text>
        <Text>
          If you took a bank loan and engaged a private lawyer for legal
          conveyancing, the fees will be around $1,500.
        </Text>
        <Text>
          Also, there’s a $40-80 administrative fee for the submission of your
          HDB resale transaction:
        </Text>
        <Text>- $40 for 1- and 2-room flats</Text>
        <Text>- $80 for 3-room and bigger flats</Text>
        <Text>
          The HDB flat inspection may also happen at this stage. Technical
          Executives from an HDB branch will come down to inspect your flat for
          any structural damages and unauthorised modifications. This is to
          ensure that your apartment does not compromise the integrity of the
          entire building or the safety of the new flat owners, which means if
          they spot anything, you won’t be able to complete the HDB resale
          transaction until the flat’s original state has been restored.
        </Text>
        <Text>
          Should you be out of the country and unable to attend this inspection,
          you can have another person attend on your behalf for this if you have
          a Power of Attorney.
        </Text>
        <Text>
          More information can be found on HDB's{' '}
          <CustomText
                link='https://www.hdb.gov.sg/residential/selling-a-flat/resale-application/acceptance-and-approval'
          >
            Acceptance and Approval
          </CustomText>{' '}
          page.
        </Text>
      </>
    ),
  },

  12: {
    title: 'Step 12: Receive HDB approval letter',
    description: (
      <>
        <Text>
          After the inspection, you can expect to receive an SMS or email to
          notify you that HDB’s approval letter has been posted on the HDB
          resale portal.
        </Text>
        <Text>
          Your HDB appointment will take place 8 weeks from the date of HDB’s
          acceptance of the resale application, if the necessary documents are
          submitted accurately and on time.
        </Text>
      </>
    ),
  },

  13: {
    title: 'Step 13: Prepare for the Resale Completion',
    description: (
      <>
        <Text>
          To prepare for your HDB resale completion appointment, you’ll need to:
        </Text>
        <Text>- Fix any unauthorised renovation work.</Text>
        <Text>
          - Terminate any automated GIRO payments and settle any outstanding
          payments such as property tax (payable up to the end of the year) or
          service and conservancy charges (payable up to the day of the resale
          completion).
        </Text>
        <Text>
          - Prepare to vacate your flat before the date of completion so the
          buyer can move in on time. After vacating, ensure that you’re ready to
          handover the keys to the buyer during the completion appointment.
        </Text>
      </>
    ),
  },

  14: {
    title: 'Step 14: Attend Resale Completion Appointment',
    description: (
      <>
        <Text>
          This is the last thing you’ll have to do to complete your HDB selling
          process! You’ll be scheduled for a completion appointment at HDB. Both
          you and the buyer (and your respective lawyers, if any) will have to
          attend this appointment.
        </Text>
        <Text>
          Here are a few things you’ll need to bring along for the completion
          appointment:
        </Text>
        <Text>- Your identification documents (e.g., NRIC or passport)</Text>
        <Text>- The keys to the flat</Text>
        <Text>- Any other documents that the HDB officer has requested</Text>
        <Text>During the appointment, the HDB officer will:</Text>
        <Text>- Check your identification and the buyer’s identification</Text>
        <Text>- Witness the signing of the necessary documents</Text>
        <Text>- Handover the keys to the buyer</Text>
        <Text>- Collect any outstanding fees or amounts, if applicable</Text>
        <Text>
          Once everything is completed, congratulations! You’ve officially
          completed the resale of your HDB flat.
        </Text>
      </>
    ),
  },
};


const SellingGuide = () => {
  return (<View>
<ScrollView >
      <View style={style.container}>
      <Text style={style.title}> 14 Steps Selling Guide</Text>
      <View >
      <Text style={style.description}>
        Welcome to our comprehensive 14-step HDB Selling Guide, designed to
        empower you throughout your HDB resale journey. Selling your HDB can be
        a rewarding experience, and we're here to guide you every step of the
        way. In this guide, you'll find invaluable insights, tips, and practical
        instructions to navigate the process seamlessly. From registering your
        Intent to Sell to attending the Resale Completion Appointment, we've got
        you covered. Get ready to embark on a successful selling experience, as
        we equip you with the knowledge and tools to achieve your selling goals.
        Let's begin this exciting journey together!
      </Text>
      </View>
    
      <View style = {style.descriptionContainer}>
      {Array.from({ length: 14 }, (_, i) => (
        <Title key={i + 1} data={hdbGuide[i + 1]} />
      ))}
      </View>
      </View>
    </ScrollView>
  </View>
    
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8edeb',
    padding: 16,

  },
  descriptionContainer: {
    backgroundColor: '#ffe1a8',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    textAlign: 'center', 
    fontWeight: 'bold',
    marginBottom: 10, 
    color:'#fe6d73', 
  },
  description: {
    fontSize: 16,
    color: "#415a77",
    textAlign: 'center',
    marginBottom:10,

  }
})

export default SellingGuide;
