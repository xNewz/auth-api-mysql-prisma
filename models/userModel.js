const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const createUser = async (user) => {
  const hash = await bcrypt.hash(user.password, 10);
  return prisma.user.create({
    data: {
      username: user.username,
      password: hash,
    },
  });
};

const findUserByUsername = async (username) => {
  return prisma.user.findUnique({
    where: { username: username },
  });
};

module.exports = {
  createUser,
  findUserByUsername,
};
