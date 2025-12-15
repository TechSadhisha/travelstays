import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center bg-gradient-to-r from-amber-600 to-amber-400">
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-lg">
            Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wider drop-shadow-md">
            General Stay Terms
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-sm md:prose-base max-w-none">
            <p className="text-sm md:text-base text-gray-700 mb-8 font-medium">
              PLEASE MAKE SURE YOU HAVE READ OUR TERMS AND CONDITIONS in each
              stay's rental terms shown on the stay details pages. When you make
              an enquiry you are deemed to have accepted all terms and
              conditions as shown on this website.
            </p>

            {/* 1. Arrival and Departure Times */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                1. ARRIVAL AND DEPARTURE TIMES
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The designated check in time is 3:00pm, with a check out time of
                12:00pm, unless other arrangements have been made and agreed
                upon by the Lessor. Any early arrivals or late departure times
                are subject to the availability of the villa, and will impose
                extra fees.
              </p>
            </div>

            {/* 2. Registered Guests */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                2. REGISTERED GUESTS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Only the specified number of Guest listed in the Booking
                Agreement at the time of booking may reside on the Property. The
                number of Guest given at the time of the booking is the maximum
                number of guest allowed. If the Owner or a representative of the
                Owner ("the Representative") will find that an additional number
                of guest are staying at the Property, it is the absolute
                direction of the Owner or the Representative to ask the extra
                guest or the Guests to vacate the Property. Otherwise, each
                additional guest will be charged a published rate of $300 USD
                per night. No camping is permitted in the grounds or gardens.
                The Lessee and all Guests agree to follow and abide the rules
                and regulations of the estate where the stay is situated.
              </p>
            </div>

            {/* 3. Minimum Stay Requirements */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                3. MINIMUM STAY REQUIREMENTS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                There is a minimum 3 days stay requirement for most of the year.
                During peak seasons (Christmas & New Year), the minimum stay is
                from 7 to 10 days. For holidays such as Easter and Chinese New
                Year, the minimum stay is 5 days. This may not be applicable to
                some stays.
              </p>
            </div>

            {/* 4. Weddings & Events */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                4. WEDDINGS & EVENTS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Some stays may or may not allow weddings on the premise. If you
                take it upon yourself to host additional visitors while staying
                at the property, you will be held responsible for any additional
                costs associated with cleaning, if necessary.
              </p>
            </div>

            {/* 5. Payment Requirements */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                5. PAYMENT REQUIREMENTS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Booking the Property less than six months prior to arrival date,
                a non-refundable deposit of at least 50% of the total amount is
                due within 5 calendar days upon booking.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Booking the Property more than six months advance prior to the
                arrival date, a non-refundable deposit of at least 25% of the
                total amount is due within 5 calendar days upon booking and
                another 25% is due 6 months prior to the expected arrival date.
              </p>
            </div>

            {/* 6. Security Deposit */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                6. SECURITY DEPOSIT
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A security deposit is required by the Owner prior to the arrival
                date.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The security deposit will be authorized on credit card 48 hours
                before arrival or can be paid by bank transfer 10 days before
                arrival. The security deposit will be released or returned to
                the Lessee within 48 hours after check out.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event that the Property incurred damages or any breakages
                during the stay of the Guest, the costs will be deducted from
                the security deposit. This excludes normal and acceptable wear
                and tear.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The condition of the Property will be judged at the sole
                discretion of the Owner or the Representative. If the value of
                damages or breakages exceeds the amount of security deposit, the
                Lessee will be held liable to pay the outstanding amount to the
                Owner forthwith upon demand.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The security deposit will also be used for all costs and charges
                incurred by the Lessee and his guests if any such costs and
                charges (such as extra guests, event fee, food and beverage,
                etc.) are not paid in full.
              </p>
            </div>

            {/* 7. Cancellation Policies */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                7. CANCELLATION POLICIES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All cancellations made by the Lessee are subject to penalties
                below:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A) If the Lessee cancels the reservation 45 days or more prior
                to arrival date, all payments are forfeited but credited for 9
                months from the date of the cancellation confirmation by the
                Owner. The credit value can be used by the Lessee or anyone on
                his or her behalf for any reservation, during any period upon
                availability and solely for the Property initially reserved.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                B) If the Lessee cancels the reservation within 45 days prior to
                arrival date, all booking payments are forfeited. A full or
                partial refund is solely applicable in the event that the Owner
                secures another reservation covering partially or fully the
                initial canceled reservation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                C) Christmas and New Year Period, for any cancellation after the
                deposit and/or balance payment, all payments are forfeited.
                However, a full or partial refund is solely applicable in the
                event that the Owner secures another reservation covering
                partially or fully the initial and cancelled reservation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The above cancellation charges also apply if the Owner cancels
                the booking due to non-payment of the balance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                D) If the Lessee fails to pay any required additional deposits
                or remaining balance of booking payment at assigned due date,
                all payments are forfeited.
              </p>
            </div>

            {/* 8. Amendments */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                8. AMENDMENTS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any amendments requested by the Lessee to be made to the
                reservation dates after booking confirmation are considered to
                be a breach and is considered to be a forfeit of the Booking
                Agreement. All payments made are subject to the cancellation
                conditions stated in Clause 7 of this Terms and Conditions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In the unlikely event that the Owner is unable to accommodate
                the Lessee at the Property booked by the Lessee for any reason
                (including the sale of the Property and force majeure), the
                Owner reserves the right to transfer the Lessee and Guests to
                another property of the similar type and value, in consultation
                with the Lessee. If the price of the substituted property is
                less than the original booking, the difference will be
                reimbursed to the Lessee. If the price of the substituted
                property is higher than the original booking, the difference may
                be charged to the Lessee. If, however, after reasonable effort
                by the Owner, no alternative of similar type and value is
                available and/or no agreement can be reached between the Owner
                and the Lessee, then either party may opt to cancel the Lessee
                and ending this Booking Agreement. In that event, the Owner will
                refund the Lessee of the whole amount based on unconsumed
                booking, without further compensation.
              </p>
            </div>

            {/* 9. Lessee Insurance */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                9. LESSEE INSURANCE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All Guests including you are required to have both liability and
                comprehensive travel insurance that provides coverage,
                including, but not limited to, cancellation, loss and damage to
                baggage and other property, and flight delays. All Guests
                including you should also carry health coverage that includes,
                but is not limited to evacuation and repatriation. We and the
                Owner shall not be held liable to the Guests and you for any and
                all claims, including any accidents related to the use of the
                Property, facilities or locally procured third party services
                such as watercraft, water sports, jeep or motorbike rental etc.
              </p>
            </div>

            {/* 10. Force Majeure */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                10. FORCE MAJEURE
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In the event of any act of God, strike, war, warlike operation,
                rebellion, riot, civil war, lockout, interference of trade
                unions, suspension of labour, fire, accident, act of terrorism
                or of any circumstances arising or action taken beyond or
                outside the reasonable control of the Owner, preventing it from
                the performance of any obligation in terms hereof (any such
                event herein called "force majeure") then we and the Owner shall
                be relieved of the obligations in terms of this Booking
                Agreement during the period that the force majeure continues and
                shall not be liable for any delay or failure in the performance
                of any obligations herein contained or loss or damage which the
                Lessee may suffer due to or resulting from the force majeure.
              </p>
            </div>

            {/* 11. Complaints */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                11. COMPLAINTS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Any problems or complaints that occur during the booking period
                should be discussed first with the local staff. If the staff is
                unable to quickly resolve the issue, please consult the
                Representative, who will notify the staff of the Property
                immediately. We and the Owner cannot be held liable for issues
                such as interruptions to water supply, electricity, Internet
                connection, cable TV, or breakdowns of lifts or pool filtration
                systems. The Owner will do everything within reasonable
                expectation to avoid complaints in the first place, and it
                should be understood that when staying in a less developed and
                remote resort location, the infrastructure, local standards, and
                conditions are typically less developed than in urban
                environments. In case of complaints, Lessee should do it by
                writing to the Owner within 24 hours when the issue occurred.
                Complaints made after checkout will not be considered.
              </p>
            </div>

            {/* 12. Conduct and Behavior */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                12. CONDUCT AND BEHAVIOR
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When booking the Property, the Lessee shall be responsible for
                the Guests' behavior. If any Guest behaves in an inappropriate
                manner, the Owner and/or the Representative, at their absolute
                discretion, may ask the offending party to leave the Property.
                In this case, no refund shall be claimed by the Lessee. In
                addition, the Owner and the Representative reserve the right to
                enter the Property at a reasonable time in order to gain access
                to complete repairs, perform maintenance, or to show the
                Property to prospective lessee.
              </p>
            </div>

            {/* 13. Social Corporate Responsibility */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                13. SOCIAL CORPORATE RESPONSIBILITY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlawful possession, use or consumption of any illegal
                substances is prohibited in the Property. Unlawful behavior is
                also prohibited. The Police will be contacted immediately if
                there is any violation. No refunds shall be made in these
                circumstances.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For the safety of our Lessee and local employees, as well as for
                protection of Property, you and the Guests are not allowed to
                bring male or female joiners back to the Property.
              </p>
            </div>

            {/* 14. Property Staff */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                14. PROPERTY STAFF
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Staff service is included in your stay at the Property from 7 am
                to 10 pm. On occasion, and with prior notice, they are also
                available for late-night special events or early morning
                breakfast (Extra hours can be charged at the discretion of the
                Property policy). At your own discretion, a tip may be given
                upon departure.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Additional services such as babysitting and drivers can be
                arranged in advance and are subject to availability and
                additional charge. Asking staff to look after minor children is
                not allowed. The Lessee must allow staff such as pool
                maintenance workers and gardeners access to the grounds in order
                to complete their work.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Should there be a request for change or addition of staff, there
                will be an extra charge of US$ 75 for each staff per night.
              </p>
            </div>

            {/* 15. No Pets */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                15. NO PETS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You and the Guests are not allowed to bring pets in the Property
                and on surrounding properties.
              </p>
            </div>

            {/* 16. No Smoking */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                16. NO SMOKING
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Smoking is NOT permitted inside the Property. Smoking is only
                allowed outside on the grounds, where an ashtray can be provided
                by the staff of the Property. Shishas and Hookah are prohibited
                in Property in accordance to Thai Government laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
