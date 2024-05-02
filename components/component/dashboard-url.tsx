"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ResponsiveLine } from "@nivo/line";
import {
  ClassAttributes,
  HTMLAttributes,
  JSX,
  SVGProps,
  useEffect,
  useState,
} from "react";

export function DashboardUrl() {
  const [oldUrl, SetoldUrl] = useState("");
  const [newUrl, SetnewUrl] = useState("");
  useEffect(() => {
    try {
      fetch(newUrl).then(() => {});
    } catch (e) {
      console.log(e);
    }
  }, [newUrl]);
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <header className="bg-white py-4 shadow dark:bg-gray-800">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link
            className="text-lg font-bold text-gray-900 dark:text-gray-50"
            href="#"
          >
            API Optimizer
          </Link>
          <div className="flex items-center space-x-4">
            {/* <Button className="rounded-full" size="icon" variant="ghost">
              <SunIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Toggle dark mode</span>
            </Button> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  {/* <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimages%2Fpng-profile.html&psig=AOvVaw3yGtcFLRybs9dvX4KJi4gv&ust=1714763628081000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCClrnW74UDFQAAAAAdAAAAABAE"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  /> */}
                  <div className="w-[30px] h-[30px] rounded-[100%] bg-red-200"></div>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Optimize Your API</CardTitle>
                <CardDescription>
                  <span>
                    Enter your API URL and well provide you with a new optimized
                    URL that can speed up your API calls.
                  </span>
                  <span className="mt-[10px]">
                    - Make sure to include http:// or https://
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="api-url">API URL</Label>
                    <Input
                      id="api-url"
                      placeholder="https://api.example.com/v1/data"
                      onChange={(e) => {
                        SetoldUrl(e.currentTarget.value);
                      }}
                      required
                      type="url"
                    />
                  </div>
                  <Button
                    type="submit"
                    // oldUrl.replace(
                    //   "https://",
                    //   "https://api-optimizer.vercel.app/api/optimize?url="
                    // )
                    onClick={() => {
                      SetnewUrl("https://api-cache.uhost.pro/" + btoa(oldUrl));
                    }}
                  >
                    Optimize URL
                  </Button>
                </div>
                <div className="mt-[20px]">{newUrl}</div>
              </CardContent>
            </Card>
            <Card className="relative ">
              <div className="w-[100% h-[100%]  blur-md absolute inset-0 m-auto z-[999] bg-[#111827b5] text-white flex justify-center items-center font-bold text-3xl"></div>
              <div className="w-[100% h-[100%] absolute inset-0 m-auto z-[9999] text-[#b8b8b8] flex justify-center items-center font-bold text-3xl">
                <div className="blur-0 filter-none">Coming soon</div>
              </div>
              <CardHeader>
                <CardTitle>API Call Statistics</CardTitle>
                <CardDescription>
                  View the performance metrics for your optimized API calls.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2">
                      <ActivityIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div className="text-2xl font-bold">1,234</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Total Calls
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <ClockIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div className="text-2xl font-bold">125ms</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Avg. Response Time
                      </div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <GaugeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Success Rate
                      </div>
                    </div>
                  </div>
                  <LineChart className="aspect-[9/4]" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 py-6 text-gray-400">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <p>© 2024 API Optimizer. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-50" href="#">
              Privacy
            </Link>
            <Link className="hover:text-gray-50" href="#">
              Terms
            </Link>
            <Link className="hover:text-gray-50" href="#">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ActivityIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GaugeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function LineChart(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function SunIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
