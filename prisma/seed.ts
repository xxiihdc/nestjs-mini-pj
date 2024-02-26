import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { group } from 'console';

const prisma = new PrismaClient();

async function main() {
  console.log("create admin")
  const admin = await prisma.admin.upsert({
    where: { id: 1 },
    update: {},
    create: {
      username: "admin",
      encryptedPassword: hash('Hihi123!@#'),
    }
  })
  console.log("Inserted admin: ", admin)
  console.log("create company")
  const company = await prisma.company.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Demo Company",
      companyDomain: "demo_company.com",
      status: true,
    }
  })

  const companyId = (await prisma.company.findFirst()).id
  console.log("Inserted company", company)

  console.log("Create group")
  const group = await prisma.group.upsert({
    where: { id: 1 },
    update: {},
    create: {
      companyId: companyId,
      name: "Demo Group 1",
    }
  })
  console.log("Inserted group", group)

  console.log("Created child group")
  const childGroup = await prisma.group.create({
    data: {
      companyId: companyId,
      name: "Demo PJ 1",
      parentId: (await prisma.group.findFirst()).id
    }}
  )
  console.log("Inserted child group", childGroup)

  console.log("Create employee")
  const employee = await prisma.employee.upsert({
    where: { id: 1},
    update: {},
    create: {
      code: "DC1-HIHI-123",
      fullName: "Employee full name",
      companyEmail: "employee_full_name@demo_company.com",
      companyUniqueName: "Employee full name - DC-HIHI-123",
      contractStartDate: new Date(),
      companyId: companyId
    }
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
