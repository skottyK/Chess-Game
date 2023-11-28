import org.junit.Test;
import static org.junit.Assert.*;


import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

public class testSettingsMenuPOST {

    public void testPostSettings() {
        MockHttpServletRequest request = new MockHttpServletRequest();
        MockHttpServletResponse response = new MockHttpServletResponse();
        SettingsController controller = new SettingsController();

        // Set up your test data
        String settingsJson = "{\"playerSettings\":\"singlePlayer\",\"timer\":10,\"difficulty\":\"easy\"}";
        request.setContent(settingsJson.getBytes());

        controller.postSettings(request, response);

        assertEquals(200, response.getStatus());
        // Further assertions to verify the response and any side effects
    }
}
