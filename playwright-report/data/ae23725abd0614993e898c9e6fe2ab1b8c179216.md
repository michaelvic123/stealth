# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: calendar.spec.ts >> calendar linking >> adds a calendar event from a mail with an event attachment
- Location: tests\e2e\calendar.spec.ts:19:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('TOKEN2049 Abu Dhabi')
Expected: visible
Error: strict mode violation: getByText('TOKEN2049 Abu Dhabi') resolved to 2 elements:
    1) <span class="mail-preview-heading truncate text-[13.5px] font-semibold leading-5 text-foreground/94">TOKEN2049 Abu Dhabi</span> aka getByRole('button', { name: 'TOKEN2049 Abu Dhabi TOKEN2049' })
    2) <div class="mail-preview-subheading mt-0.5 truncate text-[12.25px] font-semibold leading-4 text-foreground/78">TOKEN2049 Abu Dhabi - founder pass ready</div> aka getByRole('button', { name: 'TOKEN2049 Abu Dhabi TOKEN2049' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('TOKEN2049 Abu Dhabi')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic: "Demo Mode: Showing placeholder data."
  - generic [ref=e3]:
    - complementary [ref=e6]:
      - generic [ref=e7]:
        - img [ref=e9]
        - generic [ref=e12]:
          - generic [ref=e13]: STEALTH
          - generic [ref=e14]: mail protocol
        - button "Toggle sidebar" [ref=e15]:
          - img [ref=e16]
      - button "Compose Ctrl+N" [ref=e19]:
        - img [ref=e20]
        - generic [ref=e23]: Compose
        - generic [ref=e24]: Ctrl+N
      - navigation [ref=e25]:
        - list [ref=e27]:
          - listitem [ref=e28]:
            - button "All Mail 16" [ref=e29]:
              - img [ref=e30]
              - generic [ref=e33]: All Mail
              - generic [ref=e34]: "16"
          - listitem [ref=e35]:
            - button "Inbox 9" [ref=e36]:
              - img [ref=e38]
              - generic [ref=e41]: Inbox
              - generic [ref=e42]: "9"
          - listitem [ref=e43]:
            - button "Priority 1" [ref=e44]:
              - img [ref=e45]
              - generic [ref=e48]: Priority
              - generic [ref=e49]: "1"
          - listitem [ref=e50]:
            - button "Snoozed 1" [ref=e51]:
              - img [ref=e52]
              - generic [ref=e55]: Snoozed
              - generic [ref=e56]: "1"
          - listitem [ref=e57]:
            - button "Starred 3" [ref=e58]:
              - img [ref=e59]
              - generic [ref=e61]: Starred
              - generic [ref=e62]: "3"
          - listitem [ref=e63]:
            - button "Drafts 1" [ref=e64]:
              - img [ref=e65]
              - generic [ref=e68]: Drafts
              - generic [ref=e69]: "1"
          - listitem [ref=e70]:
            - button "Sent 1" [ref=e71]:
              - img [ref=e72]
              - generic [ref=e75]: Sent
              - generic [ref=e76]: "1"
        - generic [ref=e77]:
          - generic [ref=e78]: Protocol
          - list [ref=e79]:
            - listitem [ref=e80]:
              - button "Verified 1" [ref=e81]:
                - img [ref=e82]
                - generic [ref=e85]: Verified
                - generic [ref=e86]: "1"
            - listitem [ref=e87]:
              - button "Pending Proof 1" [ref=e88]:
                - img [ref=e89]
                - generic [ref=e92]: Pending Proof
                - generic [ref=e93]: "1"
            - listitem [ref=e94]:
              - button "Requests 3" [ref=e95]:
                - img [ref=e96]
                - generic [ref=e101]: Requests
                - generic [ref=e102]: "3"
            - listitem [ref=e103]:
              - button "Encrypted 1" [ref=e104]:
                - img [ref=e105]
                - generic [ref=e108]: Encrypted
                - generic [ref=e109]: "1"
        - generic [ref=e110]:
          - generic [ref=e111]: Delivery
          - list [ref=e112]:
            - listitem [ref=e113]:
              - button "Receipts 1" [ref=e114]:
                - img [ref=e115]
                - generic [ref=e117]: Receipts
                - generic [ref=e118]: "1"
            - listitem [ref=e119]:
              - button "Outbox 1" [ref=e120]:
                - img [ref=e121]
                - generic [ref=e123]: Outbox
                - generic [ref=e124]: "1"
            - listitem [ref=e125]:
              - button "Scheduled 1" [ref=e126]:
                - img [ref=e127]
                - generic [ref=e131]: Scheduled
                - generic [ref=e132]: "1"
        - generic [ref=e133]:
          - generic [ref=e134]: Storage
          - list [ref=e135]:
            - listitem [ref=e136]:
              - button "Archive 1" [ref=e137]:
                - img [ref=e138]
                - generic [ref=e141]: Archive
                - generic [ref=e142]: "1"
            - listitem [ref=e143]:
              - button "Spam 1" [ref=e144]:
                - img [ref=e145]
                - generic [ref=e147]: Spam
                - generic [ref=e148]: "1"
            - listitem [ref=e149]:
              - button "Trash 1" [ref=e150]:
                - img [ref=e151]
                - generic [ref=e154]: Trash
                - generic [ref=e155]: "1"
        - generic [ref=e156]:
          - generic [ref=e157]: Folders
          - button [ref=e158]:
            - img [ref=e159]
        - list [ref=e160]:
          - listitem [ref=e161]:
            - button "Clients" [ref=e162]:
              - img [ref=e163]
              - generic [ref=e166]: Clients
          - listitem [ref=e167]:
            - button "Investors" [ref=e168]:
              - img [ref=e169]
              - generic [ref=e172]: Investors
          - listitem [ref=e173]:
            - button "Personal" [ref=e174]:
              - img [ref=e175]
              - generic [ref=e178]: Personal
      - generic [ref=e179]:
        - generic [ref=e181]: EN
        - generic [ref=e182]:
          - generic [ref=e183]: Uthaimin
          - generic [ref=e184]: kryputh@stealth.me
    - separator [ref=e186]:
      - img [ref=e188]
    - generic [ref=e197]:
      - banner [ref=e198]:
        - generic [ref=e199]:
          - img
          - textbox "Search messages, people, proofs, attachments..." [ref=e200]
          - button "K" [ref=e201]:
            - img [ref=e202]
            - text: K
        - generic [ref=e204]:
          - button "Proofs" [ref=e205]:
            - img [ref=e206]
            - generic [ref=e209]: "2"
          - button "Later" [ref=e210]:
            - img [ref=e211]
            - generic [ref=e214]: "5"
          - button "Files" [ref=e215]:
            - img [ref=e216]
            - generic [ref=e218]: "9"
        - generic [ref=e219]:
          - button "Filter" [ref=e221]:
            - img [ref=e222]
          - button "Notifications" [ref=e225]:
            - img [ref=e227]
          - button "Import contacts" [ref=e231]:
            - img [ref=e232]
          - button "Help" [ref=e236]:
            - img [ref=e237]
            - generic [ref=e240]: "?"
          - button "Proof Inspector" [ref=e241]:
            - img [ref=e242]
            - generic [ref=e245]: I
          - button "Settings" [ref=e246]:
            - img [ref=e247]
            - generic [ref=e250]: ","
          - button "Personal" [ref=e253]:
            - generic [ref=e255]: Personal
      - generic [ref=e257]:
        - generic [ref=e260]:
          - generic [ref=e261]:
            - generic [ref=e262]:
              - heading "Inbox" [level=2] [ref=e263]
              - paragraph [ref=e264]: 9 conversations
            - generic [ref=e265]:
              - button "all" [ref=e266]
              - button "unread" [ref=e267]
              - button "flagged" [ref=e268]
          - listbox [ref=e269]:
            - listitem [ref=e270]:
              - generic [ref=e271]:
                - checkbox "Select all visible messages" [ref=e272]
                - checkbox
                - button "Select all" [ref=e273]
                - generic [ref=e274]: 9 conversations
                - generic [ref=e275]: Ctrl/⌘+A · Esc
            - listitem [ref=e276]:
              - generic [ref=e277]:
                - 'checkbox "Select Lina Park: Q2 brand system - final direction" [ref=e278]'
                - checkbox
                - button "Lina Park Lina Park Verified 9:42 AM Q2 brand system - final direction" [ref=e279]:
                  - img "Lina Park" [ref=e281]
                  - generic [ref=e283]:
                    - generic [ref=e284]:
                      - generic [ref=e285]:
                        - generic [ref=e286]: Lina Park
                        - generic [ref=e288]:
                          - img [ref=e289]
                          - generic [ref=e292]: Verified
                      - generic [ref=e293]: 9:42 AM
                    - generic [ref=e294]: Q2 brand system - final direction
            - listitem [ref=e295]:
              - generic [ref=e296]:
                - 'checkbox "Select TOKEN2049 Abu Dhabi: TOKEN2049 Abu Dhabi - founder pass ready" [ref=e297]'
                - checkbox
                - button "TOKEN2049 Abu Dhabi TOKEN2049 Abu Dhabi Verified 9:18 AM TOKEN2049 Abu Dhabi - founder pass ready" [active] [ref=e298]:
                  - img "TOKEN2049 Abu Dhabi" [ref=e300]
                  - generic [ref=e302]:
                    - generic [ref=e303]:
                      - generic [ref=e304]:
                        - generic [ref=e305]: TOKEN2049 Abu Dhabi
                        - generic [ref=e307]:
                          - img [ref=e308]
                          - generic [ref=e311]: Verified
                      - generic [ref=e312]: 9:18 AM
                    - generic [ref=e313]: TOKEN2049 Abu Dhabi - founder pass ready
            - listitem [ref=e314]:
              - generic [ref=e315]:
                - 'checkbox "Select Relay Node 07: Your relay verification code" [ref=e316]'
                - checkbox
                - button "Relay Node 07 Relay Node 07 Unknown 8:57 AM Your relay verification code" [ref=e317]:
                  - img "Relay Node 07" [ref=e319]
                  - generic [ref=e321]:
                    - generic [ref=e322]:
                      - generic [ref=e323]:
                        - generic [ref=e324]: Relay Node 07
                        - generic [ref=e326]:
                          - img [ref=e327]
                          - generic [ref=e330]: Unknown
                      - generic [ref=e331]: 8:57 AM
                    - generic [ref=e332]: Your relay verification code
            - listitem [ref=e333]:
              - generic [ref=e334]:
                - 'checkbox "Select Uthaimin Lawal: Investor update and postage policy" [ref=e335]'
                - checkbox
                - button "Uthaimin Lawal Uthaimin Lawal Unknown 8:23 AM Investor update and postage policy" [ref=e336]:
                  - img "Uthaimin Lawal" [ref=e338]
                  - generic [ref=e339]:
                    - generic [ref=e340]:
                      - generic [ref=e341]:
                        - generic [ref=e342]: Uthaimin Lawal
                        - generic [ref=e344]:
                          - img [ref=e345]
                          - generic [ref=e348]: Unknown
                      - generic [ref=e349]: 8:23 AM
                    - generic [ref=e350]: Investor update and postage policy
            - listitem [ref=e351]:
              - generic [ref=e352]:
                - 'checkbox "Select Unknown Sender: Message request awaiting approval" [ref=e353]'
                - checkbox
                - button "Unknown Sender Unknown Sender Paid 7:48 AM Message request awaiting approval" [ref=e354]:
                  - img "Unknown Sender" [ref=e356]
                  - generic [ref=e358]:
                    - generic [ref=e359]:
                      - generic [ref=e360]:
                        - generic [ref=e361]: Unknown Sender
                        - generic [ref=e363]:
                          - img [ref=e364]
                          - generic [ref=e367]: Paid
                      - generic [ref=e368]: 7:48 AM
                    - generic [ref=e369]: Message request awaiting approval
              - button "Review sender" [ref=e371]:
                - img [ref=e372]
                - generic [ref=e375]: Review sender
            - listitem [ref=e376]:
              - generic [ref=e377]:
                - 'checkbox "Select Stellar Fund: Grant application review" [ref=e378]'
                - checkbox
                - button "Stellar Fund Stellar Fund Verified Yesterday Grant application review" [ref=e379]:
                  - img "Stellar Fund" [ref=e381]
                  - generic [ref=e383]:
                    - generic [ref=e384]:
                      - generic [ref=e385]:
                        - generic [ref=e386]: Stellar Fund
                        - generic [ref=e388]:
                          - img [ref=e389]
                          - generic [ref=e392]: Verified
                      - generic [ref=e393]: Yesterday
                    - generic [ref=e394]: Grant application review
              - button "Review sender" [ref=e396]:
                - img [ref=e397]
                - generic [ref=e400]: Review sender
            - listitem [ref=e401]:
              - generic [ref=e402]:
                - 'checkbox "Select Anonymous Trader: OTC offer for STEALTH tokens" [ref=e403]'
                - checkbox
                - button "Anonymous Trader Anonymous Trader Paid Yesterday OTC offer for STEALTH tokens" [ref=e404]:
                  - img "Anonymous Trader" [ref=e406]
                  - generic [ref=e408]:
                    - generic [ref=e409]:
                      - generic [ref=e410]:
                        - generic [ref=e411]: Anonymous Trader
                        - generic [ref=e413]:
                          - img [ref=e414]
                          - generic [ref=e417]: Paid
                      - generic [ref=e418]: Yesterday
                    - generic [ref=e419]: OTC offer for STEALTH tokens
              - button "Review sender" [ref=e421]:
                - img [ref=e422]
                - generic [ref=e425]: Review sender
            - listitem [ref=e426]:
              - generic [ref=e427]:
                - 'checkbox "Select Nadia Reyes: Encrypted payload test" [ref=e428]'
                - checkbox
                - button "Nadia Reyes Nadia Reyes Verified Yesterday Encrypted payload test" [ref=e429]:
                  - img "Nadia Reyes" [ref=e431]
                  - generic [ref=e432]:
                    - generic [ref=e433]:
                      - generic [ref=e434]:
                        - generic [ref=e435]: Nadia Reyes
                        - generic [ref=e437]:
                          - img [ref=e438]
                          - generic [ref=e441]: Verified
                      - generic [ref=e442]: Yesterday
                    - generic [ref=e443]: Encrypted payload test
            - listitem [ref=e444]:
              - generic [ref=e445]:
                - 'checkbox "Select Stealth Security: Your sign-in passkey" [ref=e446]'
                - checkbox
                - button "Stealth Security Stealth Security Unknown Just now Your sign-in passkey" [ref=e447]:
                  - img "Stealth Security" [ref=e449]
                  - generic [ref=e451]:
                    - generic [ref=e452]:
                      - generic [ref=e453]:
                        - generic [ref=e454]: Stealth Security
                        - generic [ref=e456]:
                          - img [ref=e457]
                          - generic [ref=e460]: Unknown
                      - generic [ref=e461]: Just now
                    - generic [ref=e462]: Your sign-in passkey
        - separator [ref=e463]:
          - img [ref=e465]
        - generic [ref=e475]:
          - generic [ref=e476]:
            - generic [ref=e478]:
              - generic [ref=e479]: LP
              - generic [ref=e480]:
                - generic [ref=e481]:
                  - generic [ref=e482]: Lina Park
                  - generic [ref=e484]:
                    - img [ref=e485]
                    - text: Verified
                - generic [ref=e488]: lina*vantage.studio
            - generic [ref=e489]:
              - button "Reply" [ref=e491]:
                - img [ref=e492]
                - generic [ref=e495]: Reply
              - button [ref=e496]:
                - img [ref=e497]
              - button [ref=e501]:
                - img [ref=e502]
            - generic [ref=e505]:
              - button "Z" [ref=e506]:
                - img [ref=e507]
                - generic [ref=e510]: Z
              - button "E" [ref=e511]:
                - img [ref=e512]
                - generic [ref=e515]: E
              - button "Move to trash" [ref=e516]:
                - img [ref=e517]
              - button "Unstar" [ref=e520]:
                - img [ref=e521]
          - generic [ref=e523]:
            - article:
              - generic:
                - generic:
                  - paragraph: Conversation
                  - heading "Q2 brand system - final direction" [level=1]
                  - generic:
                    - generic [ref=e524]: Design
                    - generic [ref=e525]: Priority
              - generic [ref=e526]:
                - generic [ref=e529]: Stellar identity verified
                - generic [ref=e530]: 01c7...9a9
                - generic [ref=e531]:
                  - button "Inspect provenance" [ref=e532]
                  - button "Copy proof" [ref=e533]
              - generic [ref=e537]: Read receipt sent
              - generic:
                - paragraph: Hey,
                - paragraph: Sharing the refined exploration for the new identity. The monochrome system feels strongest across product surfaces. I've attached the latest spec sheet and the motion principles deck.
                - paragraph: Let me know your thoughts before Friday's review.
                - paragraph: Lina
              - generic:
                - generic: 4 attachments
                - generic:
                  - generic [ref=e539] [cursor=pointer]:
                    - img [ref=e541]
                    - generic:
                      - generic: vantage-identity-v3.pdf
                      - generic: 4.2 MB
                  - generic [ref=e544] [cursor=pointer]:
                    - img [ref=e546]
                    - generic:
                      - generic: brand-moodboard.png
                      - generic: 1.8 MB
                  - generic [ref=e550] [cursor=pointer]:
                    - img [ref=e552]
                    - generic:
                      - generic: release-notes.txt
                      - generic: 1.2 KB
                  - generic [ref=e555] [cursor=pointer]:
                    - img [ref=e557]
                    - generic:
                      - generic: motion-principles.key
                      - generic: 12.1 MB
        - separator [ref=e560]:
          - img [ref=e562]
```

# Test source

```ts
  1  | import { test, expect } from "./fixtures";
  2  | 
  3  | test.describe("calendar linking", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.addInitScript(() => {
  6  |       localStorage.setItem("stealth-preferences", JSON.stringify({ onboardingCompleted: true }));
  7  |     });
  8  |     await page.goto("/");
  9  |   });
  10 | 
  11 |   async function openToken2049EventMail(page: Parameters<typeof test>[1]) {
  12 |     await page
  13 |       .getByRole("button", {
  14 |         name: /TOKEN2049 Abu Dhabi.*TOKEN2049 Abu Dhabi - founder pass ready/,
  15 |       })
  16 |       .click();
  17 |   }
  18 | 
  19 |   test("adds a calendar event from a mail with an event attachment", async ({ page }) => {
  20 |     await openToken2049EventMail(page);
  21 | 
  22 |     // The EventMailCard should render with the event title
> 23 |     await expect(page.getByText("TOKEN2049 Abu Dhabi")).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  24 | 
  25 |     // Add to calendar
  26 |     await page.getByRole("button", { name: /Add to calendar/i }).click();
  27 | 
  28 |     // Toast confirms the event was added
  29 |     await expect(page.getByText(/added to your calendar/i)).toBeVisible();
  30 |   });
  31 | 
  32 |   test("opens the calendar workspace from the sidebar calendar button", async ({ page }) => {
  33 |     // The right panel has an "Open calendar" or calendar section
  34 |     // Alternatively open via the event mail card's "Open calendar" action
  35 |     await openToken2049EventMail(page);
  36 | 
  37 |     // Add event first so it exists in calendar state
  38 |     await page.getByRole("button", { name: /Add to calendar/i }).click();
  39 | 
  40 |     // Then open the calendar workspace
  41 |     await page.getByRole("button", { name: /Open calendar/i }).click();
  42 | 
  43 |     // CalendarWorkspace dialog/modal should appear
  44 |     await expect(page.getByText("TOKEN2049 Abu Dhabi")).toBeVisible();
  45 |   });
  46 | 
  47 |   test("calendar workspace closes on close button click", async ({ page }) => {
  48 |     // Open via right panel create event button – requires an email selected first
  49 |     await openToken2049EventMail(page);
  50 |     await page.getByRole("button", { name: /Add to calendar/i }).click();
  51 |     await page.getByRole("button", { name: /Open calendar/i }).click();
  52 | 
  53 |     // Dismiss the calendar workspace
  54 |     await page.getByRole("button", { name: /close/i }).first().click();
  55 | 
  56 |     // The CalendarWorkspace modal should no longer be visible
  57 |     // Check that calendar-specific heading is gone
  58 |     await expect(page.getByText("TOKEN2049 Abu Dhabi - founder pass ready")).toBeVisible();
  59 |   });
  60 | });
  61 | 
```