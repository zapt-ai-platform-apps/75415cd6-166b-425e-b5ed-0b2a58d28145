export const marketData = [
  {
    name: "United States",
    marketInfo: {
      overview: "The United States real estate market is diverse and varies significantly by region. Generally, it's a mature market with well-established legal protections for property rights and a transparent transaction process. The U.S. offers a wide range of investment opportunities from high-growth urban centers to stable suburban areas and emerging markets.",
      priceTrends: "Home prices have seen strong appreciation in most markets since 2012, with particularly high growth in coastal and tech-hub cities. While growth has moderated in some markets, overall the trend remains upward with regional variations.",
      rentalMarket: "Rental demand remains strong, especially in major metropolitan areas where affordability challenges prevent many from purchasing. Short-term rental markets have created new opportunities in tourist destinations.",
      metrics: {
        priceGrowth: "6-8% annually",
        rentalYield: "4-7% on average",
        vacancyRate: "5-7%"
      },
      hotMarkets: [
        {
          name: "Austin, Texas",
          description: "Strong job growth, particularly in tech, with relatively affordable housing compared to coastal tech hubs.",
          avgPrice: "$550,000",
          yield: "5.2%"
        },
        {
          name: "Raleigh, North Carolina",
          description: "Emerging tech center with strong population growth and educational institutions driving demand.",
          avgPrice: "$420,000",
          yield: "5.5%"
        },
        {
          name: "Nashville, Tennessee",
          description: "Vibrant economy with strong tourism and healthcare sectors supporting rental demand.",
          avgPrice: "$460,000",
          yield: "4.8%"
        },
        {
          name: "Phoenix, Arizona",
          description: "Growing population and business-friendly environment with relatively affordable housing.",
          avgPrice: "$445,000",
          yield: "5.7%"
        }
      ],
      investmentOutlook: "The U.S. market is expected to remain strong in the medium to long term, though with more moderate price growth than seen in recent years. Interest rates and economic factors will play a significant role in market dynamics.",
      opportunities: [
        "Secondary cities with lower entry points and strong fundamentals",
        "Value-add opportunities in appreciating neighborhoods",
        "Growing demand for single-family rentals in suburban locations",
        "Purpose-built rental housing in supply-constrained markets"
      ],
      challenges: [
        "High property prices in many prime markets",
        "Increasing interest rates affecting affordability",
        "Varying landlord-tenant laws by state and city",
        "Property tax increases in some jurisdictions"
      ]
    },
    regulatoryInfo: {
      overview: "The United States has relatively few restrictions on foreign ownership of real estate, making it an attractive market for international investors. However, regulations and tax implications vary by state and local jurisdiction.",
      foreignInvestorRules: "Foreign investors can purchase and own residential and commercial real estate with essentially the same rights as U.S. citizens. There are no significant federal restrictions, though specific programs like EB-5 have requirements for those seeking residency through investment.",
      restrictions: [
        "Some agricultural land may have ownership restrictions",
        "Properties near certain military or strategic installations may require additional scrutiny",
        "Condominiums and cooperatives may have their own restrictions on foreign ownership"
      ],
      taxes: {
        propertyTax: "Property taxes vary significantly by location, typically ranging from 0.5% to 2.5% of assessed value annually. They are levied by local governments and fund schools and local services.",
        capitalGains: "Foreign investors are subject to FIRPTA (Foreign Investment in Real Property Tax Act), which requires withholding of 15% of the sale price when selling property. Long-term capital gains tax rates generally range from 15-20% depending on income level.",
        rentalIncome: "Rental income is subject to U.S. income tax, with a standard 30% withholding for foreign investors unless covered by a tax treaty. Alternatively, foreign investors can elect to pay tax on net income (income after expenses) by filing a U.S. tax return.",
        other: "Estate taxes may apply to property owned by non-resident aliens at death. Some states have additional transfer taxes when buying or selling property."
      },
      purchaseProcess: [
        "Property search, typically with a licensed real estate agent",
        "Due diligence including property inspection, title search, and appraisal",
        "Mortgage application and approval if financing is needed",
        "Purchase offer and contract negotiation",
        "Escrow period for document preparation and final checks",
        "Closing, where final documents are signed and funds transferred"
      ],
      legalCautions: "It's strongly recommended that foreign investors work with U.S.-based attorneys familiar with both real estate and international tax issues to structure their investments properly.",
      tenantLaws: {
        overview: "Landlord-tenant laws vary significantly by state and even city, with some jurisdictions being more landlord-friendly and others offering stronger tenant protections.",
        landlordRights: [
          "Collect security deposits (limits vary by state)",
          "Evict tenants for non-payment or lease violations (following proper procedures)",
          "Increase rent (with restrictions in rent-controlled areas)",
          "Enter property with proper notice (typically 24-48 hours except in emergencies)"
        ],
        tenantRights: [
          "Right to habitable living conditions",
          "Protection against discrimination under Fair Housing laws",
          "Privacy and proper notice before landlord entry",
          "Security deposit return within specified timeframe (varies by state)",
          "Specific eviction procedures that must be followed by landlords"
        ]
      }
    }
  },
  {
    name: "United Kingdom",
    marketInfo: {
      overview: "The UK property market is mature and stable, with strong legal protections for property rights. London dominates as the premium market, but regional cities offer increasingly attractive investment opportunities with better yields.",
      priceTrends: "Property prices have seen steady long-term appreciation, particularly in London and the South East, though with periodic corrections. Regional markets have shown stronger growth in recent years as affordability constraints push buyers outside of London.",
      rentalMarket: "The rental sector continues to grow as affordability challenges in the sales market increase the renter population. Purpose-built rental developments (Build-to-Rent) are an emerging trend in major cities.",
      metrics: {
        priceGrowth: "3-5% annually",
        rentalYield: "3-6% depending on location",
        vacancyRate: "2-4%"
      },
      hotMarkets: [
        {
          name: "Manchester",
          description: "Strong economic growth, significant regeneration, and major infrastructure investments have made this a top UK investment location.",
          avgPrice: "£250,000",
          yield: "5.8%"
        },
        {
          name: "Birmingham",
          description: "The UK's second-largest city is benefiting from major infrastructure projects and business relocations from London.",
          avgPrice: "£230,000",
          yield: "5.4%"
        },
        {
          name: "Leeds",
          description: "Strong financial sector presence and growing tech scene supporting population and rental growth.",
          avgPrice: "£210,000",
          yield: "5.9%"
        },
        {
          name: "Liverpool",
          description: "Significant regeneration and comparatively low entry prices resulting in some of the highest yields in the UK.",
          avgPrice: "£185,000",
          yield: "6.2%"
        }
      ],
      investmentOutlook: "The UK market is expected to show moderate but steady growth over the medium to long term, with regional cities potentially outperforming London. Brexit impacts have largely been absorbed, though regulatory changes continue to affect the investor landscape.",
      opportunities: [
        "Regional cities with strong economic fundamentals and university populations",
        "Purpose-built student accommodation in undersupplied markets",
        "Build-to-Rent developments in major employment centers",
        "Mixed-use regeneration projects in emerging areas"
      ],
      challenges: [
        "High entry costs, particularly in London and the South East",
        "Increasing regulation of the private rental sector",
        "Higher stamp duty (tax) for additional properties and foreign buyers",
        "Potential interest rate rises affecting mortgage affordability"
      ]
    },
    regulatoryInfo: {
      overview: "The UK has an open policy toward foreign investment in real estate with few restrictions, though there are increasing tax implications for overseas investors. The legal system provides strong property rights and a transparent transaction process.",
      foreignInvestorRules: "Foreign investors face no significant restrictions on purchasing or owning property in the UK. Both residential and commercial properties are available to overseas buyers on the same legal terms as UK citizens.",
      restrictions: [
        "Additional stamp duty surcharge for non-resident buyers (2% above standard rates since April 2021)",
        "Some new developments may have restrictions on foreign buyers or absentee owners"
      ],
      taxes: {
        propertyTax: "Council Tax applies to residential properties (annual, based on property value bands). Business rates apply to commercial properties. Both are relatively modest compared to property values.",
        capitalGains: "Non-UK residents are subject to Non-Resident Capital Gains Tax (NRCGT) on UK property at rates of 18-28% for residential property and 10-20% for commercial property. Main residence relief is generally not available to non-residents.",
        rentalIncome: "Rental income is taxable in the UK for all landlords. Non-resident landlords typically have basic rate tax (20%) withheld by tenants or letting agents unless approved for the Non-Resident Landlord Scheme to receive gross rents.",
        other: "Stamp Duty Land Tax (SDLT) is payable on purchase, with rates from 0-12% for residential properties. Additional surcharges apply for second homes (3%) and non-resident buyers (2%). Annual Tax on Enveloped Dwellings (ATED) applies to residential properties owned through companies."
      },
      purchaseProcess: [
        "Property search, typically with an estate agent",
        "Mortgage arrangement if required (more complex for non-residents)",
        "Making an offer and having it accepted",
        "Legal process (conveyancing) including searches and contract review",
        "Exchange of contracts (legally binding with deposit payment)",
        "Completion (final payment and key handover)"
      ],
      legalCautions: "The UK property purchase process differs between England/Wales, Scotland, and Northern Ireland. Foreign investors should work with solicitors experienced in their specific region and in dealing with international clients.",
      tenantLaws: {
        overview: "The UK has increasingly regulated the private rental sector with stronger tenant protections, especially in recent years. Landlords must comply with numerous legal requirements including safety regulations and deposit protection.",
        landlordRights: [
          "Collect rent and reasonable deposits (capped at 5-6 weeks' rent)",
          "Increase rent with proper notice (typically annually)",
          "Evict tenants for specific reasons following proper procedures",
          "Enter property with notice (typically 24 hours) for inspections and repairs"
        ],
        tenantRights: [
          "Assured Shorthold Tenancy protection (standard tenancy type)",
          "Deposit protection in government-approved schemes",
          "Protection against unfair eviction (minimum notice periods)",
          "Right to live in a property in good repair and free from health hazards",
          "Protection against discriminatory practices"
        ]
      }
    }
  },
  {
    name: "Canada",
    marketInfo: {
      overview: "Canada's real estate market is characterized by strong demand in major urban centers and limited supply, leading to significant price appreciation over the past decade. It's considered a stable market with lower volatility than many other developed countries.",
      priceTrends: "Prices have risen substantially in major cities like Toronto and Vancouver, with some moderation in recent years due to government cooling measures. Montreal and smaller cities have seen accelerated growth as buyers seek affordability.",
      rentalMarket: "Rental markets are tight in major cities with low vacancy rates. Purpose-built rental construction is increasing but hasn't kept pace with demand, leading to rising rents in urban centers.",
      metrics: {
        priceGrowth: "4-7% annually",
        rentalYield: "3-5% in major cities",
        vacancyRate: "1-3% in major markets"
      },
      hotMarkets: [
        {
          name: "Montreal, Quebec",
          description: "Relatively affordable compared to Toronto and Vancouver, with strong economic fundamentals and growing tech sector.",
          avgPrice: "CAD $550,000",
          yield: "4.2%"
        },
        {
          name: "Ottawa, Ontario",
          description: "Stable government employment base with growing tech sector and relatively affordable housing.",
          avgPrice: "CAD $650,000",
          yield: "4.5%"
        },
        {
          name: "Halifax, Nova Scotia",
          description: "Atlantic Canada's largest city with growing population and comparatively affordable housing.",
          avgPrice: "CAD $450,000",
          yield: "5.1%"
        },
        {
          name: "Calgary, Alberta",
          description: "Recovering from energy sector downturn with diversifying economy and strong affordability compared to other major Canadian cities.",
          avgPrice: "CAD $480,000",
          yield: "4.8%"
        }
      ],
      investmentOutlook: "The Canadian market is expected to remain strong in the medium to long term, supported by immigration and limited supply in major urban centers. Government policies to address affordability may impact investment returns in some segments.",
      opportunities: [
        "Purpose-built rental housing in supply-constrained markets",
        "Secondary markets with growing employment and lower entry costs",
        "Student housing near major universities",
        "Suburban properties as remote work trends continue"
      ],
      challenges: [
        "High property prices in Vancouver and Toronto",
        "Increased government regulation including foreign buyer taxes",
        "Rising interest rates affecting affordability",
        "Strict rent control in some provinces limiting rental growth"
      ]
    },
    regulatoryInfo: {
      overview: "Canada's approach to foreign real estate investment has tightened in recent years, particularly in hot markets like British Columbia and Ontario. While the country remains open to foreign investment, several tax measures specifically target non-resident buyers.",
      foreignInvestorRules: "Foreign investors can purchase and own most types of real estate in Canada, though recent restrictions have been implemented in certain provinces and at the federal level. As of January 2023, there is a two-year prohibition on foreign commercial enterprises and individuals who are not Canadian citizens or permanent residents from purchasing residential property in Canada, with some exceptions.",
      restrictions: [
        "Federal prohibition on foreign ownership of residential property (with exceptions for students, work permit holders, and certain property types)",
        "Foreign buyer taxes in British Columbia (20%) and Ontario (20%) on residential purchases in specific regions",
        "Some agricultural land may have ownership restrictions depending on the province",
        "New restrictions may be implemented as housing affordability remains a political issue"
      ],
      taxes: {
        propertyTax: "Property taxes are levied by municipalities and vary significantly across Canada, typically ranging from 0.5% to 2.5% of the assessed value annually.",
        capitalGains: "Non-residents selling Canadian property are subject to withholding tax of 25% of the gross selling price. The seller can file a Canadian tax return to pay tax only on the actual gain (50% of which is taxable) and potentially receive a refund of excess withholding.",
        rentalIncome: "Non-resident owners must pay a 25% withholding tax on gross rental income, collected by the tenant or rental agent. Alternatively, non-residents can elect to file a Canadian tax return to pay tax on net rental income at graduated rates.",
        other: "Land transfer taxes apply in most provinces when purchasing property, typically 0.5% to 2% of purchase price. Some cities (notably Toronto) levy their own additional land transfer taxes."
      },
      purchaseProcess: [
        "Property search, typically with a licensed real estate agent",
        "Mortgage pre-approval if financing is needed (more challenging for non-residents)",
        "Making an offer, typically with conditions for financing, inspection, etc.",
        "Removing conditions after satisfactory completion of inspections and securing financing",
        "Closing, typically handled by a lawyer or notary (in Quebec)"
      ],
      legalCautions: "Real estate laws vary significantly by province in Canada. Foreign investors should work with legal professionals familiar with both the specific provincial rules and the federal regulations affecting non-resident owners.",
      tenantLaws: {
        overview: "Landlord-tenant laws are governed at the provincial level and vary significantly across Canada. Some provinces like Ontario and British Columbia have strong tenant protection while others offer more balanced or landlord-friendly environments.",
        landlordRights: [
          "Collect rent and security deposits (limits vary by province)",
          "Increase rent according to provincial guidelines (typically once per 12 months)",
          "Evict tenants for specific reasons following proper procedures",
          "Enter rental units with proper notice (typically 24 hours)"
        ],
        tenantRights: [
          "Security of tenure in most provinces (protection from arbitrary eviction)",
          "Rent control or rent increase guidelines in many provinces",
          "Right to habitable living conditions",
          "Required notice periods for landlord entry",
          "Specific procedures landlords must follow for eviction"
        ]
      }
    }
  },
  {
    name: "Australia",
    marketInfo: {
      overview: "Australia's property market is concentrated in the coastal cities where most of the population lives. It's a mature market with strong legal protections and relatively high transparency. The market has shown resilience and strong long-term growth, particularly in Sydney and Melbourne.",
      priceTrends: "Property prices have seen substantial growth over the past decade, especially in major cities. After a brief correction in 2018-19, the market rebounded strongly during the pandemic before moderating with interest rate increases.",
      rentalMarket: "Rental demand is strong in major cities, particularly near employment centers and transportation. Purpose-built rental developments are an emerging sector but still represent a small portion of the market.",
      metrics: {
        priceGrowth: "5-7% annually long-term",
        rentalYield: "2.5-4.5% in major cities",
        vacancyRate: "1-3% typically"
      },
      hotMarkets: [
        {
          name: "Brisbane, Queensland",
          description: "Strong population growth from interstate migration and relatively affordable compared to Sydney and Melbourne.",
          avgPrice: "AUD $750,000",
          yield: "4.1%"
        },
        {
          name: "Adelaide, South Australia",
          description: "Stable economy with growing defense and technology sectors and good affordability.",
          avgPrice: "AUD $650,000",
          yield: "4.3%"
        },
        {
          name: "Perth, Western Australia",
          description: "Recovering from mining downturn with diversifying economy and relatively strong yields.",
          avgPrice: "AUD $550,000",
          yield: "4.5%"
        },
        {
          name: "Gold Coast, Queensland",
          description: "Popular lifestyle destination with strong tourism and growing permanent population.",
          avgPrice: "AUD $800,000",
          yield: "4.0%"
        }
      ],
      investmentOutlook: "Australia's property market is expected to show moderate growth over the medium term, with regional variations. Population growth through immigration will continue to support demand, particularly in major cities.",
      opportunities: [
        "Middle-ring suburbs with good transportation links in major cities",
        "Regional centers benefiting from work-from-home trends",
        "Purpose-built student accommodation near major universities",
        "Medium-density development in growth corridors"
      ],
      challenges: [
        "High entry costs in Sydney and Melbourne",
        "Strict foreign investment regulations",
        "Relatively low rental yields in premium markets",
        "Rising interest rates affecting affordability"
      ]
    },
    regulatoryInfo: {
      overview: "Australia has significant regulations governing foreign investment in real estate, with a focus on channeling foreign investment toward increasing housing supply rather than competing for existing stock.",
      foreignInvestorRules: "Foreign investors generally require approval from the Foreign Investment Review Board (FIRB) before purchasing residential real estate. Approval is typically granted for new dwellings or vacant land for development, but rarely for existing homes.",
      restrictions: [
        "Restrictions on purchasing existing residential dwellings (generally not permitted for non-residents)",
        "Temporary residents can buy one existing home as their residence but must sell when departing Australia",
        "FIRB application fees apply to all foreign purchases (substantial, based on property value)",
        "Additional state-based stamp duty surcharges for foreign buyers"
      ],
      taxes: {
        propertyTax: "Land tax is levied by states on land value above certain thresholds. Rates and thresholds vary by state, with foreign owners often subject to surcharges. Primary residences are typically exempt.",
        capitalGains: "Non-residents pay capital gains tax on Australian property at rates up to 45% with no tax-free threshold or discount. Withholding of 12.5% of the gross sale proceeds applies when non-residents sell property.",
        rentalIncome: "Rental income is taxable in Australia. Non-residents pay tax at rates starting at 32.5% with no tax-free threshold. Normal property expenses can be deducted.",
        other: "Stamp duty is payable on purchase (varies by state, typically 4-6% of property value). Foreign buyer surcharges of 7-8% apply in most states. Annual vacancy fees apply to foreign-owned properties left vacant for more than six months per year."
      },
      purchaseProcess: [
        "Obtain FIRB approval (for foreign buyers)",
        "Property search, typically with a real estate agent",
        "Arranging financing if required (more limited options for non-residents)",
        "Making an offer or bidding at auction",
        "Contract exchange (typically with 10% deposit)",
        "Settlement (usually 30-90 days after exchange)"
      ],
      legalCautions: "Australia's states have different property laws and tax regimes, so foreign investors should seek advice specific to the state where they're investing. FIRB rules change periodically, so current advice is essential.",
      tenantLaws: {
        overview: "Residential tenancy laws are governed at the state level and have generally been strengthened in favor of tenants in recent years. Commercial leases have different rules and typically offer longer terms.",
        landlordRights: [
          "Collect rent and security deposits (typically 4-6 weeks' rent)",
          "Inspect the property periodically with proper notice",
          "End tenancies with proper notice at the end of fixed terms",
          "Increase rent (typically once every 6-12 months depending on state)"
        ],
        tenantRights: [
          "Minimum notice periods for entry, rent increases, and termination",
          "Right to request repairs and maintenance",
          "Protection against unfair eviction during lease terms",
          "Return of security deposit within specified timeframes",
          "Increasingly, rights to make minor modifications and keep pets"
        ]
      }
    }
  },
  {
    name: "Spain",
    marketInfo: {
      overview: "Spain's property market has recovered strongly from the 2008 global financial crisis, with prices rising steadily in recent years, particularly in major cities and coastal areas. It remains an attractive market for international investors seeking lifestyle properties and rental income.",
      priceTrends: "After bottoming out around 2013-2014, property prices have shown consistent growth, especially in Madrid, Barcelona, and tourist destinations. The recovery has been more uneven in smaller cities and rural areas.",
      rentalMarket: "The rental market is strong in major cities and tourist areas. Short-term holiday rentals have been particularly profitable in tourist destinations, though increasing regulation is affecting this segment.",
      metrics: {
        priceGrowth: "3-6% annually in recent years",
        rentalYield: "4-7% depending on location and property type",
        vacancyRate: "Varies significantly by region"
      },
      hotMarkets: [
        {
          name: "Madrid",
          description: "The capital city offers strong rental demand from both locals and expatriates, with good long-term appreciation potential.",
          avgPrice: "€3,500/sqm",
          yield: "4.5%"
        },
        {
          name: "Barcelona",
          description: "Popular with international buyers and tourists, offering strong rental potential despite increasing regulation.",
          avgPrice: "€4,000/sqm",
          yield: "4.2%"
        },
        {
          name: "Valencia",
          description: "More affordable than Madrid or Barcelona with growing international appeal and strong lifestyle benefits.",
          avgPrice: "€1,800/sqm",
          yield: "5.3%"
        },
        {
          name: "Malaga/Costa del Sol",
          description: "Popular tourist destination with strong international demand and rental potential.",
          avgPrice: "€2,500/sqm",
          yield: "5.8%"
        }
      ],
      investmentOutlook: "Spain's property market is expected to continue moderate growth, supported by foreign investment and domestic economic recovery. Tourist areas may face challenges as regulations on short-term rentals increase.",
      opportunities: [
        "Value-add opportunities in emerging neighborhoods in major cities",
        "Residential properties in secondary cities with growth potential",
        "Commercial properties in recovering areas",
        "Tourist properties in regulated areas with established rental potential"
      ],
      challenges: [
        "Increasing regulation of tourist rentals in popular areas",
        "Significant regional differences in market performance",
        "Complex bureaucracy and potential language barriers",
        "Variable rental demand outside major cities and tourist areas"
      ]
    },
    regulatoryInfo: {
      overview: "Spain is generally open to foreign real estate investment with few restrictions. All foreign buyers need is a foreign identification number (NIE) to purchase property. The legal system provides strong property rights with a transparent registration system.",
      foreignInvestorRules: "Foreign investors can purchase and own almost all types of Spanish real estate on the same terms as Spanish nationals. The exception is some properties in areas of military or strategic importance, which may require special permissions.",
      restrictions: [
        "Properties in certain border areas or military zones may require defense ministry authorization",
        "Some areas restrict short-term tourist rentals, affecting investment strategies"
      ],
      taxes: {
        propertyTax: "Annual property tax (IBI) is levied by municipalities, typically 0.4-1.1% of cadastral value. Non-resident owners also pay Non-Resident Property Tax (imputed income tax) of approximately 0.5-2% of cadastral value annually.",
        capitalGains: "Non-residents pay a flat rate of 19% on capital gains from property sales. A withholding tax of 3% of the purchase price is retained when non-residents sell, which is credited against final tax liability.",
        rentalIncome: "Rental income for non-residents is taxed at a flat rate of 19% for EU/EEA residents and 24% for others. EU/EEA residents can deduct expenses, while non-EU/EEA residents can typically only deduct a few limited costs.",
        other: "Purchase taxes include Transfer Tax (ITP) for resale properties (typically 6-11% depending on region) or VAT plus Stamp Duty for new properties (10% VAT plus 0.5-1.5% stamp duty). Wealth tax may apply to high-value assets."
      },
      purchaseProcess: [
        "Obtaining an NIE (foreign identification number)",
        "Property search, often with a real estate agent",
        "Optional reservation contract with small deposit",
        "Due diligence conducted by a lawyer",
        "Private purchase contract and payment of deposit (typically 10%)",
        "Completion at notary with final payment and title transfer"
      ],
      legalCautions: "It's strongly recommended to work with an independent lawyer familiar with both Spanish property law and issues specific to foreign buyers. Historical issues with planning permissions and property rights make due diligence essential.",
      tenantLaws: {
        overview: "Spanish rental laws have traditionally favored tenants, with recent reforms further strengthening tenant protections, particularly for primary residences. Tourist rental regulations vary significantly by region and municipality.",
        landlordRights: [
          "Collect rent and security deposits (typically 1-2 months' rent)",
          "Recover property at end of contract term with proper notice",
          "Increase rent annually in line with contract terms (typically indexed to inflation)",
          "Enter property with tenant's permission for inspections"
        ],
        tenantRights: [
          "Minimum lease term of 5-7 years for primary residences (tenant can leave earlier)",
          "Rent increases limited to annual inflation for primary residence contracts",
          "Right to terminate with 30 days' notice after 6 months",
          "Protection against arbitrary eviction during lease term",
          "First right of refusal if landlord sells property"
        ]
      }
    }
  }
];