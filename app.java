import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class PasswordEncryption {

    public static String encrypt(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hash = md.digest(password.getBytes());

        StringBuilder hexString = new StringBuilder();
        for (byte b : hash) {
            hexString.append(String.format("%02x", b));
        }
        return hexString.toString();
    }

    public static void main(String[] args) throws NoSuchAlgorithmException {
        String[] passwords = {
            "pass123", "admin456", "hello789", "java123",
            "secure1", "welcome2", "test345", "coding99",
            "mypwd12", "secret88"
        };

        // Replace each password with its encrypted value
        for (int i = 0; i < passwords.length; i++) {
            passwords[i] = encrypt(passwords[i]);
        }

        // Display encrypted passwords
        for (String encryptedPassword : passwords) {
            System.out.println(encryptedPassword);
        }
    }
}