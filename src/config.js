export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Platform",
    dataIndex: "platform",
    key: "platform",
  },
  {
    title: "Version",
    dataIndex: "version",
    key: "version",
  },
  {
    title: "Upgraded",
    dataIndex: "upgradeNum",
    key: "upgradeNum",
  },
  {
    title: "Creator",
    dataIndex: "creator",
    key: "creator",
  },
  {
    title: "Date",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Action",
    key: "operation",
  },
];
export const data = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: `Screem ${i + 1}`,
    platform: "iOS",
    version: "10.3.4.5654",
    upgradeNum: 500,
    creator: "Jack",
    createdAt: "2014-12-24 23:12:00",
  });
}

export const innerColumns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    key: "state",
  },
  {
    title: "Upgrade Status",
    dataIndex: "upgradeNum",
    key: "upgradeNum",
  },
  {
    title: "Action",
    dataIndex: "operation",
    key: "operation",
  },
];
export const innerData = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: "2014-12-24 23:12:00",
    name: `This is production name ${i + 1}`,
    upgradeNum: "Upgraded: 56",
  });
}
